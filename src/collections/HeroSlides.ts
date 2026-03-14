import type { CollectionConfig } from 'payload'
import { isEditorOrAbove, isPublic, isSuperAdmin } from '../access'

export const HeroSlides: CollectionConfig = {
  slug: 'hero-slides',
  labels: { singular: 'Slide del Hero', plural: 'Slides del Hero' },
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'image', 'order', 'active'], description: 'Imágenes que se muestran en el carrusel de la página principal.' },
  access: { read: isPublic, create: isEditorOrAbove, update: isEditorOrAbove, delete: isSuperAdmin },
  fields: [
    { name: 'title', label: 'Título', type: 'text', required: true },
    { name: 'subtitle', label: 'Subtítulo', type: 'text' },
    { name: 'image', label: 'Imagen', type: 'upload', relationTo: 'media', required: true },
    { name: 'order', label: 'Orden', type: 'number', defaultValue: 0, admin: { description: 'Número menor = aparece primero' } },
    { name: 'active', label: 'Activo', type: 'checkbox', defaultValue: true, admin: { description: 'Desactivar para ocultar sin eliminar' } },
  ],
}
