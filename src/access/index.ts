import type { Access } from 'payload'
import { checkRole, type Role } from './checkRole'

/** Cualquiera puede leer (público) */
export const isPublic: Access = () => true

/** Solo usuarios logueados */
export const isLoggedIn: Access = ({ req: { user } }) => Boolean(user)

/** Solo admins y superadmins */
export const isAdmin: Access = ({ req: { user } }) =>
  checkRole(user?.role as Role, ['superadmin', 'admin'])

/** Solo superadmins */
export const isSuperAdmin: Access = ({ req: { user } }) =>
  checkRole(user?.role as Role, ['superadmin'])

/** Admins o el propio usuario */
export const isAdminOrSelf: Access = ({ req: { user }, id }) => {
  if (checkRole(user?.role as Role, ['superadmin', 'admin'])) return true
  if (user && id) return String(user.id) === String(id)
  return false
}

/** Cualquier usuario con rol de editor o superior puede crear/editar contenido */
export const isEditorOrAbove: Access = ({ req: { user } }) =>
  checkRole(user?.role as Role, ['superadmin', 'admin', 'editor'])
