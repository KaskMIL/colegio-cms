import type { CollectionConfig } from 'payload'

import { isAdmin, isAdminOrSelf, isSuperAdmin } from '../access'
import { protectRoles } from '../hooks/protectRoles'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'email', 'role'],
  },
  access: {
    read: isAdminOrSelf,
    create: isAdmin,
    update: isAdminOrSelf,
    delete: isSuperAdmin,
    admin: ({ req: { user } }) => {
      if (!user) return false
      return ['superadmin', 'admin', 'editor'].includes(user.role as string)
    },
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'firstName',
          label: 'Nombre',
          type: 'text',
          required: true,
          defaultValue: 'Admin',
        },
        {
          name: 'lastName',
          label: 'Apellido',
          type: 'text',
          required: true,
          defaultValue: 'User',
        },
      ],
    },
    {
      name: 'fullName',
      label: 'Nombre completo',
      type: 'text',
      admin: {
        hidden: true,
      },
      hooks: {
        beforeValidate: [
          ({ siblingData }) => {
            return `${siblingData?.firstName || ''} ${siblingData?.lastName || ''}`.trim()
          },
        ],
      },
    },
    {
      name: 'role',
      label: 'Rol',
      type: 'select',
      required: true,
      defaultValue: 'editor',
      options: [
        { label: 'Super Administrador', value: 'superadmin' },
        { label: 'Administrador', value: 'admin' },
        { label: 'Editor', value: 'editor' },
      ],
      hooks: {
        beforeChange: [protectRoles],
      },
      admin: {
        description:
          'Super Admin: acceso total. Admin: gestiona contenido y usuarios. Editor: solo crea y edita contenido.',
      },
    },
  ],
}
