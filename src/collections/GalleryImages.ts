import type { CollectionConfig } from 'payload'

export const GalleryImages: CollectionConfig = {
  slug: 'gallery-images',
  labels: {
    singular: 'Foto de Galería',
    plural: 'Galería de Fotos',
  },
  admin: {
    useAsTitle: 'caption',
    defaultColumns: ['caption', 'category', 'image', 'year'],
    description: 'Fotos del colegio, jardín, eventos y actividades.',
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'image',
      label: 'Imagen',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'caption',
      label: 'Descripción',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      label: 'Categoría',
      type: 'select',
      required: true,
      options: [
        { label: 'Jardín', value: 'jardin' },
        { label: 'Primaria', value: 'primaria' },
        { label: 'Secundaria', value: 'secundaria' },
        { label: 'Eventos', value: 'eventos' },
        { label: 'Instalaciones', value: 'instalaciones' },
        { label: 'Deportes', value: 'deportes' },
        { label: 'Actos', value: 'actos' },
      ],
    },
    {
      name: 'year',
      label: 'Año',
      type: 'number',
      admin: {
        description: 'Año del evento o foto (ej: 2025)',
      },
    },
  ],
  defaultSort: '-createdAt',
}
