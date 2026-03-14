import type { CollectionConfig } from 'payload'
import { isEditorOrAbove, isPublic, isSuperAdmin } from '../access'

export const Media: CollectionConfig = {
  slug: 'media',
  access: { read: isPublic, create: isEditorOrAbove, update: isEditorOrAbove, delete: isSuperAdmin },
  fields: [{ name: 'alt', type: 'text', required: true }],
  upload: true,
}
