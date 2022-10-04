import { PermsAction, PermsActionEnum, PermsState } from './types';
import { UserInterface } from '../../../models/interfaces/User.interface';

const initialState: PermsState = {
  perms: [],
  roles: []
};

export default function permsReducer(state = initialState, action: PermsAction): PermsState {
  switch (action.type) {
    case PermsActionEnum.SET_PERMS:
      return { ...state, perms: action.payload };
    case PermsActionEnum.SET_ROLES:
      return { ...state, roles: action.payload };
    default:
      return state;
  }
}
