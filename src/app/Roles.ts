export class Role {
  roleId: number;
  roleType: string;
  roleName: string;
}

export class UserRoles {
  userId: string;
  roles: Role[];
}
