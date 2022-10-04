import { AuthActionCreators } from './auth/action-creators';
import { PermsActionCreators } from './perms/action-creators';

export const allActionCreators = {
  ...AuthActionCreators,
  ...PermsActionCreators
};
