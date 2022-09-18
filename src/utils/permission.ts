import type { Role } from '@/api/users'

export function isPermitted(
  allowedRoles: Role[],
  roles: Role[] = useUserStore().roles
): boolean {
  if (roles.some((role) => allowedRoles.includes(role))) {
    return true
  } else {
    for (const role of roles) {
      for (const allowRole of allowedRoles) {
        if (isSubGroup(allowRole, role)) {
          return true
        }
      }
    }
  }
  return false
}

/**
 * So far, we don't have two roles having intersection but no one is subset
 * of the other. All these roles form a chain like: A ∈ B ∈ C ∈ D. For example,
 * admin role has all authority of staff, staff have all authority of guest.
 *
 * If one day there are two roles A and B in a chain in this situation: A, B both have
 * authority of action 1, A has authority of action 2 but B, B is accessible to
 * action 3 but A, they would never form a chain, so the chain should be corrected.
 *
 * TODO: correct the chain if there is the situation above.
 * */
const rolesChain: {
  [k in Role]: number
} = {
  superuser: 100,
  admin: 90,
  staff: 60,
}

export function isSubGroup(role1: Role, role2: Role): boolean {
  return rolesChain[role2] >= rolesChain[role1]
}
