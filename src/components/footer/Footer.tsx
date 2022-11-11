import React, { FC } from 'react';
import { Container } from '../ui/container/Container';
import { Footer } from '../namespaces/footer/Footer';
import { ComponentInterface } from '../../types';

interface Footer extends ComponentInterface {
  topPeace?: boolean;
}

export const FooterLayout: FC<Footer> = ({ topPeace }) => {
  return (
    <Container>
      <footer>
        <Footer.Header topPeace={topPeace}>
          <Footer.Wallpaper />
          <Footer.Links />
          <Footer.Other />
          <Footer.Community />
        </Footer.Header>
        <Footer.Footer />
      </footer>
    </Container>
  );
};
