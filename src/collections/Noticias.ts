import type { CollectionConfig } from 'payload'

export const Noticias: CollectionConfig = {
  slug: 'noticias',
  labels: {
    singular: 'Noticia',
    plural: 'Noticias',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'tag', 'date', 'published'],
    description: 'Noticias y eventos del colegio y jardín.',
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'title',
      label: 'Título',
      type: 'text',
      required: true,
    },
    {
      name: 'tag',
      label: 'Categoría',
      type: 'select',
      required: true,
      options: [
        { label: 'Noticia', value: 'noticia' },
        { label: 'Evento', value: 'evento' },
        { label: 'Feria', value: 'feria' },
        { label: 'Acto', value: 'acto' },
        { label: 'Deportes', value: 'deportes' },
        { label: 'Jardín', value: 'jardin' },
      ],
    },
    {
      name: 'date',
      label: 'Fecha',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'dd/MM/yyyy',
        },
      },
    },
    {
      name: 'excerpt',
      label: 'Resumen',
      type: 'textarea',
      required: true,
      maxLength: 300,
      admin: {
        description: 'Breve descripción que se muestra en la tarjeta (máx. 300 caracteres)',
      },
    },
    {
      name: 'content',
      label: 'Contenido',
      type: 'richText',
    },
    {
      name: 'image',
      label: 'Imagen principal',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'author',
      label: 'Autor',
      type: 'text',
      defaultValue: 'Colegio San Miguel Arcángel',
      admin: {
        description: 'Nombre de quien escribe la noticia',
      },
    },
    {
      name: 'published',
      label: 'Publicado',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Solo las noticias publicadas se muestran en la web',
      },
    },
  ],
  defaultSort: '-date',
}
