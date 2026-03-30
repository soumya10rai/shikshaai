import { UserRole } from './types';

export function getRoleFromQueryParams(): UserRole {
  if (typeof window === 'undefined') return null;
  
  const params = new URLSearchParams(window.location.search);
  const role = params.get('role');
  
  if (role === 'ADMIN' || role === 'BLOCK_OFFICER' || role === 'SCHOOL') {
    return role;
  }
  
  return null;
}

export function setRole(role: UserRole): void {
  if (typeof window === 'undefined') return;
  
  if (role) {
    window.location.href = `?role=${role}`;
  } else {
    window.location.href = '/';
  }
}

export function getRoleLabel(role: UserRole): string {
  switch (role) {
    case 'ADMIN':
      return 'Monitor';
    case 'BLOCK_OFFICER':
      return 'Block Officer';
    case 'SCHOOL':
      return 'School';
    default:
      return 'Unknown Role';
  }
}

export function canAccessAdmin(role: UserRole): boolean {
  return role === 'ADMIN';
}

export function canAccessBlock(role: UserRole): boolean {
  return role === 'BLOCK_OFFICER' || role === 'ADMIN';
}

export function canAccessField(role: UserRole): boolean {
  return role === 'BLOCK_OFFICER';
}

export function canAccessSchool(role: UserRole): boolean {
  return role === 'SCHOOL';
}
