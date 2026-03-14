export type Role = 'superadmin' | 'admin' | 'editor'

export function checkRole(userRole: Role | undefined, allowedRoles: Role[]): boolean {
  if (!userRole) return false
  return allowedRoles.includes(userRole)
}
