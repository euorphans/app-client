import React, { useLayoutEffect } from 'react';
import { Rankings } from '../components/namespaces/rankings/Rankings';
import { useLayout } from '../hooks/useLayout';

export const RankingsPage = () => {
  const { state: layout } = useLayout();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    layout.footer.topPeace.set(true);
    layout.footer.state.set(true);
  }, []);

  return (
    <div style={{ minHeight: 'calc(100vh - 333px)' }}>
      <Rankings.Wrapper>
        <Rankings.Head />
        <Rankings.Body />
      </Rankings.Wrapper>
    </div>
  );
};
