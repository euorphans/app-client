import style from './Preloader.module.scss';
import React, { FC, useEffect, useLayoutEffect } from 'react';
import { Logo } from '../ui/logo/Logo';
import { NotFound } from '../namespaces/notFound/NotFound';
import { useLayout } from '../../hooks/useLayout';

interface PreloaderI {
  query: Promise<any>;
  state: { value: any; setState: any };

  children: React.ReactNode;
}

export const Preloader: FC<PreloaderI> = ({ query, children, state }) => {
  const { state: layout } = useLayout();

  useLayoutEffect(() => {
    query
      .then((response) => {
        state.setState(response.data);
      })
      .catch((e) => {
        state.setState(e);
      });
  }, []);

  useEffect(() => {
    if (state.value.success) {
    } else {
      if (state.value.code == 'ECONNABORTED') {
        setTimeout(() => {
          window.location.reload();
        }, 1);
      }
    }
  }, [state.value]);

  return state.value.error ? (
    <NotFound.Body title={`${state.value.error.code}xx`} description={state.value.error.message} />
  ) : state.value?.user ? (
    <>{children}</>
  ) : (
    <div className={style.preloader} style={{ background: 'white' }}>
      <Logo width={119} height={140} />
    </div>
  );
};
