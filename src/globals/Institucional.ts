import type { GlobalConfig } from 'payload'

export const Institucional: GlobalConfig = {
  slug: 'institucional',
  label: 'Sección Institucional',
  admin: {
    description: 'Contenido de la sección "Nuestra historia" en la página principal.',
  },
  access: {
    read: () => true,
    update: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'sectionLabel',
      label: 'Etiqueta de sección',
      type: 'text',
      defaultValue: 'Nuestra historia',
    },
    {
      name: 'titleLine1',
      label: 'Título — primera línea',
      type: 'text',
      required: true,
      defaultValue: 'Más de 30 años',
    },
    {
      name: 'titleLine2',
      label: 'Título — segunda línea (color verde)',
      type: 'text',
      required: true,
      defaultValue: 'educando con compromiso y dedicación',
    },
    {
      name: 'paragraph1',
      label: 'Primer párrafo',
      type: 'textarea',
      required: true,
      defaultValue:
        'En 1994 nació el Jardín de Infantes La Alpina Verde y el Colegio San Miguel Arcángel, con una misión clara: ofrecer educación de calidad a las familias de San Miguel, cerca de casa y con el calor de siempre.',
    },
    {
      name: 'paragraph2',
      label: 'Segundo párrafo',
      type: 'textarea',
      required: true,
      defaultValue:
        'Hoy, con más de 30 años de trayectoria, seguimos siendo ese lugar donde cada chico tiene nombre, cada familia es bienvenida, y cada día es una oportunidad para crecer juntos.',
    },
    {
      name: 'ctaText',
      label: 'Texto del botón',
      type: 'text',
      defaultValue: 'Conocé más sobre nosotros →',
    },
    {
      name: 'ctaLink',
      label: 'Link del botón',
      type: 'text',
      defaultValue: '#',
    },
    {
      name: 'image',
      label: 'Imagen de la sección',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
