import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { HeroSlides } from './collections/HeroSlides'
import { Noticias } from './collections/Noticias'
import { GalleryImages } from './collections/GalleryImages'
import { ContactMessages } from './collections/ContactMessages'
import { Institucional } from './globals/Institucional'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: ' — Colegio San Miguel Arcángel',
    },
    components: {
      graphics: {
        Logo: './components/Logo',
        Icon: './components/Icon',
      },
    },
  },
  collections: [Users, Media, HeroSlides, Noticias, GalleryImages, ContactMessages],
  globals: [Institucional],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [],
  cors: [process.env.FRONTEND_URL || 'http://localhost:5173'],
  csrf: [process.env.FRONTEND_URL || 'http://localhost:5173'],
})
