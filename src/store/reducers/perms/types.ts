export interface PermsState {
  perms: Array<string>;
  roles: Array<string>;
}

export enum PermsActionEnum {
  SET_PERMS = 'SET_PERMS',
  SET_ROLES = 'SET_ROLES'
}

export interface SetPermsAction {
  type: PermsActionEnum.SET_PERMS;
  payload: Array<string>;
}

export interface SetRolesAction {
  type: PermsActionEnum.SET_ROLES;
  payload: Array<string>;
}

export type PermsAction = SetPermsAction | SetRolesAction;
