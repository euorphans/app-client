import './App.scss';
import './normalize.scss';
import React, { FC, useEffect } from 'react';
import { RootRouter } from './components/RootRouter';
import { Layout } from './components/layout/Layout';
import { useLayout } from './hooks/useLayout';

export const App: FC = () => {
  const { state } = useLayout();

  return (
    <>
      <Layout
        useNavbar={state.header.get()}
        useFooter={state.footer.get()}
        useContainer={state.container.get()}>
        <RootRouter />
      </Layout>
    </>
  );
};
