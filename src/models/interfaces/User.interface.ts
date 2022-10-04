import { RoleInterface } from './Role.interface';

export interface UserInterface {
  id: number;
  name: string;
  created_at: number;

  roles: Array<RoleInterface>;
}
