import {
  AuthActionEnum,
  SetAuthAction,
  SetErrorAction,
  SetIsLoadingAction,
  SetIsUserLoadingAction,
  SetUserAction
} from './types';
import { UserInterface } from '../../../models/interfaces/User.interface';
import { AppDispatch } from '../../index';
import axios, { AxiosResponse } from 'axios';
import UserService from '../../../services/UserService';
import { config } from '../../../config';

export const AuthActionCreators = {
  setUser: (user: UserInterface): SetUserAction => ({
    type: AuthActionEnum.SET_USER,
    payload: user
  }),
  setIsAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionEnum.SET_AUTH, payload: auth }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: AuthActionEnum.SET_IS_LOADING,
    payload
  }),
  setIsUserLoading: (payload: boolean): SetIsUserLoadingAction => ({
    type: AuthActionEnum.SET_IS_USER_LOADING,
    payload
  }),
  setError: (payload: string): SetErrorAction => ({ type: AuthActionEnum.SET_ERROR, payload }),
  login: (token: string, resolve: any, reject: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(false));
      await axios
        .post(`${config.apiURL}auth/login`, {
          token: token,
          disable_cookie: true
        })
        .then((response: AxiosResponse) => {
          if (response.data.error) {
            dispatch(
              AuthActionCreators.setError(
                `Произошла ошибка при логине: ${response.data.error.message}`
              )
            );
            dispatch(AuthActionCreators.setUser({} as UserInterface));
            dispatch(AuthActionCreators.setIsAuth(false));
            reject(`Произошла ошибка при логине: ${response.data.error.message}`);

            console.log(response);
          } else {
            dispatch(AuthActionCreators.setUser(response.data.user));
            dispatch(AuthActionCreators.setIsAuth(true));
            dispatch(AuthActionCreators.setError(''));
            resolve(response.data.user.name);
            console.log(response);
            localStorage.setItem('token', response.data.access_token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;
          }
        })
        .catch((e: any) => {
          dispatch(AuthActionCreators.setError(`Произошла ошибка при логине: ${e.data.status}`));
          dispatch(AuthActionCreators.setUser({} as UserInterface));
          dispatch(AuthActionCreators.setIsAuth(false));
          reject(`Произошла ошибка при логине: ${e.data.status}`);
        });
      dispatch(AuthActionCreators.setIsLoading(true));
    } catch (e) {
      dispatch(AuthActionCreators.setError('Произошла ошибка при логине'));
    }
  },
  getUser: (token: string) => async (dispatch: AppDispatch) => {
    await axios
      .get(`${config.apiURL}user/info`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response: AxiosResponse) => {
        dispatch(AuthActionCreators.setIsAuth(response.data.authorized));
        if (response.data.authorized) {
          dispatch(AuthActionCreators.setUser(response.data.user));
        }
      })
      .catch((e: any) => {
        dispatch(AuthActionCreators.setIsAuth(false));
        dispatch(AuthActionCreators.setUser({} as UserInterface));
      });
    dispatch(AuthActionCreators.setIsUserLoading(true));
  },
  logout: (token: string) => async (dispatch: AppDispatch) => {
    dispatch(AuthActionCreators.setIsLoading(false));
    await axios.get(`${config.apiURL}auth/logout`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    localStorage.removeItem('token');
    dispatch(AuthActionCreators.setUser({} as UserInterface));
    dispatch(AuthActionCreators.setIsAuth(false));
    dispatch(AuthActionCreators.setIsLoading(true));
  }
};
