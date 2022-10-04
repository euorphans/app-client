import React, { FC, useLayoutEffect } from 'react';
import { Play } from '../components/namespaces/play/Play';
import { useLayout } from '../hooks/useLayout';

export const PlayPage: FC = () => {
  const { state: layout } = useLayout();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    layout.footer.topPeace.set(false);
    layout.footer.state.set(true);
  }, []);

  return (
    <div style={{ minHeight: 'calc(100vh - 350px)' }}>
      <Play.Head />
      <Play.Body />
    </div>
  );
};
