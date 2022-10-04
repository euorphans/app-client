// @ts-ignore
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
  const time = performance.now();

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
      layout.footer.state.set(true);
    } else {
      layout.footer.state.set(false);
      if (state.value.code == 'ECONNABORTED') {
        setTimeout(() => {
          window.location.reload();
        }, 1);
      }
    }
  }, [state.value]);

  return state.value.error ? (
    <NotFound.Body title={`${state.value.error.code}xx`} subTitle={state.value.error.message} />
  ) : state.value?.user ? (
    <>{children}</>
  ) : (
    <div className={style.preloader} style={{ background: 'white' }}>
      <Logo width={'140px'} height={'140px'} />
    </div>
  );
};
