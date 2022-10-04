import React, { FC, useLayoutEffect } from 'react';
import { Rules } from '../components/namespaces/rules/Rules';
import { useLayout } from '../hooks/useLayout';

export const RulesPage: FC = () => {
  const { state: layout } = useLayout();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    layout.footer.topPeace.set(false);
    layout.footer.state.set(true);
  }, []);

  return (
    <div style={{ minHeight: 'calc(100vh - 333px)' }}>
      <Rules.Head />
      <Rules.BasicProvisions />
      <Rules.GameProcess />
      <Rules.Communication />
      <Rules.NicknamePrefix />
      <Rules.InteractionAdministration />
      <Rules.YouTube />
      <Rules.CategoryDurationOfViolations />
      <Rules.AppealsProcess />
    </div>
  );
};
