import React, { FC } from 'react';
import { NavbarItems } from '../../utils/Items';
import { Navbar } from '../navbar/Navbar';
import { FooterLayout } from '../footer/Footer';
import { Toaster } from 'react-hot-toast';
import { Container } from '../ui/container/Container';

interface Layout {
  useNavbar: boolean;
  useFooter: { state: boolean; topPeace: boolean };
  children: React.ReactNode;
  useContainer: boolean;
}

export const Layout: FC<Layout> = ({ children, useFooter, useContainer, useNavbar }) => {
  return (
    <>
      {useNavbar && <Navbar items={NavbarItems} />}
      {useContainer && <Container>{children}</Container>}
      {useFooter.state && <FooterLayout />}

      <Toaster position={'bottom-right'} reverseOrder={false} />
    </>
  );
};
