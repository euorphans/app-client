import React, { FC, useLayoutEffect } from 'react';
import { Subscription } from '../components/namespaces/subscription/Subscription';
import { useLayout } from '../hooks/useLayout';

export const SubscriptionPage: FC = () => {
  const { state: layout } = useLayout();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    layout.footer.topPeace.set(true);
    layout.footer.state.set(false);
  }, []);

  return (
    <Subscription.Wrapper>
      <Subscription.Intro />
      <Subscription.ExclusiveIcon />
      <Subscription.AnimatedWallpaper />
    </Subscription.Wrapper>
  );
};
