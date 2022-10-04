import { RoleInterface } from '../models/interfaces/Role.interface';

export const SortRoles = (array: any, setRoles: any, setPerms: any) => {
  const perms: Array<any> = [];
  const roles: Array<any> = [];

  array.map((item: RoleInterface, key: number) => {
    roles.push(item.name);
    item.permissions.map((perm: string, key) => {
      perms.push(perm);
    });
  });

  setRoles(roles);
  setPerms(perms);
};
