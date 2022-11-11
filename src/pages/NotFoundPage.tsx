import React, { FC, useLayoutEffect } from 'react';
import { NotFound } from '../components/namespaces/notFound/NotFound';
import { useLayout } from '../hooks/useLayout';

export const NotFoundPage: FC = () => {
  const { state: layout } = useLayout();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    layout.footer.topPeace.set(false);
    layout.footer.state.set(true);
  }, []);

  return (
    <div style={{ minHeight: 'calc(100vh - 321px)' }}>
      <NotFound.Body title={'404'} description={'Мы не можем найти страницу, которую вы ищете'} />
    </div>
  );
};
