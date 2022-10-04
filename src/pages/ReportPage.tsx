import React, { FC, useLayoutEffect } from 'react';
import { Report } from '../components/namespaces/report/Report';
import { useLayout } from '../hooks/useLayout';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import style from '../components/namespaces/report/Report.module.scss';
import WardenImage from '../static/images/warden.png';
import { Button } from '../components/ui/button/Button';
import { useParams } from 'react-router-dom';

export const ReportPage: FC = () => {
  const { username } = useParams();
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
            <div className={style.body}>
              <div className={style.warden}>
                <img
                  style={{ width: '750.22px', height: '422px', userSelect: 'none' }}
                  src={WardenImage}
                  alt=""
                />
              </div>
              <div className={style.right}>
                <div className={style.text}>
                  <span className={style.title}>Привет {user.name},</span>
                  <span className={style.description}>
                    Добро пожаловать в нашу репорт-систему под названием Warden,
                    <br />
                    которая помогает держать порядок на нашем сервере.
                  </span>
                </div>
                <Button
                  styles={{
                    color: 'var(--black100)',
                    background: 'var(--white100)',
                    height: '46px'
                  }}>
                  Начать использование
                </Button>
              </div>
            </div>
          </TabPanel>
          <TabPanel>asasd</TabPanel>
          <TabPanel>asddas</TabPanel>
        </Report.Body>
      </Report.TabWrapper>
    </div>
  );
};
