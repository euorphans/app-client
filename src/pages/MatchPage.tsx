import React, { FC, useLayoutEffect } from 'react';
import { Match } from '../components/namespaces/match/Match';
import { useLayout } from '../hooks/useLayout';

export const MatchPage: FC = () => {
  const { state: layout } = useLayout();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    layout.footer.topPeace.set(false);
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
        <Match.Head />
        <Match.Body />
      </div>
    </>
  );
};
