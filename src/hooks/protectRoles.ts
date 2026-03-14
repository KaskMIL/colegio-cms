import type { FieldHook } from 'payload'
import { checkRole, type Role } from '../access/checkRole'

/**
 * Hook que previene que usuarios no-superadmin cambien roles.
 * Si el usuario no es superadmin, el campo role se mantiene
 * en su valor original (o 'editor' para usuarios nuevos).
 */
export const protectRoles: FieldHook = ({ req, value, originalDoc }) => {
  const user = req.user

  // Si no hay usuario logueado (primera creación), permitir
  if (!user) return value

  // Si es superadmin, puede cambiar cualquier rol
  if (checkRole(user.role as Role, ['superadmin'])) return value

  // Si es un documento existente, mantener el rol original
  if (originalDoc?.role) return originalDoc.role

  // Para documentos nuevos, forzar 'editor'
  return 'editor'
}
