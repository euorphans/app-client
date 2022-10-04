import React, { FC, useLayoutEffect } from 'react';
import { Report } from '../components/namespaces/report/Report';
import { useLayout } from '../hooks/useLayout';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { TabPanel } from 'react-tabs';

export const ReportPage: FC = () => {
  const { state: layout } = useLayout();
  const { user } = useTypedSelector((state) => state.auth);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    layout.footer.topPeace.set(false);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-6)',
        minHeight: 'calc(100vh - 321px)'
      }}>
      <Report.TabWrapper>
        <Report.Head>
          <Report.TabItems>
            {Report.TabSlider({ items: ['Главная', 'Пожаловаться на игрока', 'Подать апелляцию'] })}
          </Report.TabItems>
        </Report.Head>
        <Report.Body>
          <TabPanel>
            <Report.Warden username={user.name} />
          </TabPanel>
          <TabPanel>
            <Report.Report />
          </TabPanel>
          <TabPanel>
            <Report.Appeal />
          </TabPanel>
        </Report.Body>
      </Report.TabWrapper>
    </div>
  );
};
