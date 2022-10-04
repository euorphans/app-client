import React, { FC, useLayoutEffect } from 'react';
import { Subscription } from '../components/namespaces/subscription/Subscription';
import { useLayout } from '../hooks/useLayout';

export const SubscriptionPage: FC = () => {
  const { state: layout } = useLayout();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    layout.footer.topPeace.set(true);
    layout.footer.state.set(true);
  }, []);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-6)',
          minHeight: 'calc(100vh - 333px)'
        }}>
        <Subscription.Head />
        <Subscription.Body />
      </div>
    </>
  );
};
