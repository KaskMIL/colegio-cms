import type { CollectionConfig } from 'payload'

export const ContactMessages: CollectionConfig = {
  slug: 'contact-messages',
  labels: {
    singular: 'Mensaje de Contacto',
    plural: 'Mensajes de Contacto',
  },
  admin: {
    useAsTitle: 'nombre',
    defaultColumns: ['nombre', 'email', 'nivel', 'read', 'createdAt'],
    description: 'Mensajes recibidos desde el formulario de contacto de la web.',
  },
  access: {
    // Cualquiera puede crear (el form público)
    create: () => true,
    // Solo admins pueden leer/actualizar/borrar
    read: ({ req: { user } }) => Boolean(user),
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'nombre',
      label: 'Nombre completo',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      required: true,
    },
    {
      name: 'telefono',
      label: 'Teléfono',
      type: 'text',
      required: true,
    },
    {
      name: 'nivel',
      label: 'Nivel de interés',
      type: 'select',
      required: true,
      options: [
        { label: 'Jardín de Infantes (La Alpina Verde)', value: 'jardin' },
        { label: 'Nivel Primario', value: 'primaria' },
        { label: 'Nivel Secundario', value: 'secundaria' },
        { label: 'Más de un nivel', value: 'varios' },
        { label: 'Otro / Consulta general', value: 'otro' },
      ],
    },
    {
      name: 'mensaje',
      label: 'Mensaje',
      type: 'textarea',
      required: true,
    },
    {
      name: 'read',
      label: 'Leído',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Marcar como leído una vez revisado',
      },
    },
  ],
  defaultSort: '-createdAt',
}
