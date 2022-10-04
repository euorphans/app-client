import React, { FC } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { Errors } from './static/errors';
import { Provider } from 'react-redux';
import { store } from './store';
import { useTypedSelector } from './hooks/useTypedSelector';
import axios, { AxiosResponse } from 'axios';
import { config } from './config';
import { useActions } from './hooks/useActions';
import { AuthActionCreators } from './store/reducers/auth/action-creators';
import { UserInterface } from './models/interfaces/User.interface';

const rootElement = document.querySelector('.app');

if (!rootElement) {
  throw new Error(Errors.rootErr);
}

const UserProvider: FC<{ children: React.ReactNode; user: UserInterface }> = ({
  children,
  user
}) => {
  const { getInfo } = useActions();

  if (user) {
    store.dispatch(AuthActionCreators.setIsAuth(true));
    store.dispatch(AuthActionCreators.setUser(user));

    getInfo(user);
  }
  return <>{children}</>;
};

const render = (user: any) => {
  createRoot(rootElement).render(
    <Provider store={store}>
      <UserProvider user={user}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserProvider>
    </Provider>
  );
};

const accessToken = localStorage.getItem('token');

axios.defaults.timeout = 1000;

if (accessToken) {
  axios.defaults.headers.common = {
    Authorization: `Bearer ${accessToken}`
  };
  axios
    .get(`${config.apiURL}user/info`)
    .then((response: AxiosResponse) => {
      render(response.data.authorized ? response.data.user : null);
    })
    .catch((error: any) => {
      render(null);
    });
} else {
  render(null);
}
