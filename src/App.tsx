import './App.scss';
import './normalize.scss';
import React, { FC, useEffect } from 'react';
import { RootRouter } from './components/RootRouter';
import { Navbar } from './components/navbar/Navbar';
import { Container } from './components/ui/container/Container';
import { NavbarItems } from './utils/Items';
import { Footer } from './components/footer/Footer';
import { useActions } from './hooks/useActions';
import { Toaster } from 'react-hot-toast';
import { useTypedSelector } from './hooks/useTypedSelector';
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
