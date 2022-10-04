import React, { FC, useLayoutEffect } from 'react';
import { Personal } from '../components/namespaces/personal/Personal';
import { useLayout } from '../hooks/useLayout';

export const PersonalPage: FC = () => {
  const { state: layout } = useLayout();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    layout.footer.topPeace.set(false);
    layout.footer.state.set(true);
  }, []);

  return (
    <div style={{ minHeight: 'calc(100vh - 350px)' }}>
      <Personal.Head />
      <Personal.Body />
    </div>
  );
};
