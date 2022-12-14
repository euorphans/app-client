import { PermsActionEnum, SetPermsAction, SetRolesAction } from './types';
import { AppDispatch } from '../../index';
import { UserInterface } from '../../../types';

export const PermsActionCreators = {
  setPerms: (perms: Array<string>): SetPermsAction => ({
    type: PermsActionEnum.SET_PERMS,
    payload: perms
  }),
  setRoles: (roles: Array<string>): SetRolesAction => ({
    type: PermsActionEnum.SET_ROLES,
    payload: roles
  }),
  getInfo: (user: UserInterface) => (dispatch: AppDispatch) => {
    const roles: Array<string> = [];
    const perms: Array<string> = [];

    user.roles.map((item, key) => {
      roles.push(item.name);
      item.permissions.map((perm, key) => {
        perms.push(perm);
      });
    });

    dispatch(PermsActionCreators.setPerms(perms));
    dispatch(PermsActionCreators.setRoles(roles));
  }
};
