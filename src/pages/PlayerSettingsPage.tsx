import React, { FC, useLayoutEffect } from 'react';
import { PlayerSettings } from '../components/namespaces/playerSettings/PlayerSettings';
import { useLayout } from '../hooks/useLayout';

export const PlayerSettingsPage: FC = () => {
  const { state: layout } = useLayout();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    layout.footer.topPeace.set(false);
    layout.footer.state.set(true);
  }, []);

  return (
    <div style={{ minHeight: 'calc(100vh - 321px)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>
        <PlayerSettings.Head />
        <PlayerSettings.Body />
      </div>
    </div>
  );
};
