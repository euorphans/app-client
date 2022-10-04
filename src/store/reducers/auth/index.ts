import { AuthAction, AuthActionEnum, AuthState } from './types';
import { UserInterface } from '../../../models/interfaces/User.interface';

const initialState: AuthState = {
  isAuth: false,
  error: '',
  isLoading: false,
  isUserLoading: false,
  user: {} as UserInterface
};

export default function authReducer(state = initialState, action: AuthAction): AuthState {
  switch (action.type) {
    case AuthActionEnum.SET_AUTH:
      return { ...state, isAuth: action.payload, isLoading: false };
    case AuthActionEnum.SET_USER:
      return { ...state, user: action.payload };
    case AuthActionEnum.SET_ERROR:
      return { ...state, error: action.payload, isLoading: true };
    case AuthActionEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case AuthActionEnum.SET_IS_USER_LOADING:
      return { ...state, isUserLoading: action.payload };
    default:
      return state;
  }
}
