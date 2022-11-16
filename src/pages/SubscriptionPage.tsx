import React, { FC, useLayoutEffect } from 'react';
import { Subscription } from '../components/namespaces/subscription/Subscription';
import { useLayout } from '../hooks/useLayout';
import { Container } from '../components/ui/container/Container';

export const SubscriptionPage: FC = () => {
  const { state: layout } = useLayout();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    layout.footer.topPeace.set(true);
    layout.footer.state.set(false);
    layout.container.set(false);
  }, []);

  return (
    <>
      <Subscription.Intro />
      <Container>
        <Subscription.Slides>
          <Subscription.ExclusiveIcon />
          <Subscription.PremiumMatchmaking />
          <Subscription.PriorityCaptain />
          <Subscription.AnimatedWallpaper />
          <Subscription.MapSelection />
        </Subscription.Slides>
      </Container>
    </>
  );
};
