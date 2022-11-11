import { UserInterface } from '../../../types';

export interface AuthState {
  isAuth: boolean;
  user: UserInterface;
  isLoading: boolean;
  isUserLoading: boolean;
  error: string;
}

export enum AuthActionEnum {
  SET_AUTH = 'SET_AUTH',
  SET_ERROR = 'SET_ERROR',
  SET_USER = 'SET_USER',
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_IS_USER_LOADING = 'SET_IS_USER_LOADING'
}

export interface SetAuthAction {
  type: AuthActionEnum.SET_AUTH;
  payload: boolean;
}

export interface SetErrorAction {
  type: AuthActionEnum.SET_ERROR;
  payload: string;
}

export interface SetUserAction {
  type: AuthActionEnum.SET_USER;
  payload: UserInterface;
}

export interface SetIsLoadingAction {
  type: AuthActionEnum.SET_IS_LOADING;
  payload: boolean;
}

export interface SetIsUserLoadingAction {
  type: AuthActionEnum.SET_IS_USER_LOADING;
  payload: boolean;
}

export type AuthAction =
  | SetAuthAction
  | SetUserAction
  | SetErrorAction
  | SetIsLoadingAction
  | SetIsUserLoadingAction;
