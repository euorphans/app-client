import React, { createRef, FC, useEffect, useLayoutEffect, useRef } from 'react';
import style from './Report.module.scss';
import { Tab, TabList, Tabs } from 'react-tabs';
import { Button } from '../../ui/button/Button';
import WardenImage from '../../../static/images/warden.png';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

export namespace Report {
  export const TabWrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <Tabs style={{ gap: 'var(--space-6)', display: 'flex', flexDirection: 'column' }}>
        {children}
      </Tabs>
    );
  };

  export const TabSlider: FC<{ items: Array<string> }> = ({ items }) => {
    const [selected, setSelected] = React.useState(0);
    const [width, setWidth] = React.useState(0);
    const [elWidth, setElWidth] = React.useState(0);
    let sum = 0;

    const refs = useRef<any>([]);

    useEffect(() => {
      sum = 0;

      Array.from({ length: selected }).map((item, key) => {
        sum += refs.current[key].offsetWidth + 15;
      });

      setWidth(sum);
      setElWidth(refs.current[selected].offsetWidth);
    }, [selected]);

    console.log(refs, width);

    return (
      <>
        <div
          className={style.border}
          style={{
            transform: `translateX(${width}px)`,
            width: elWidth
          }}></div>

        {items.map((item, index) => {
          return (
            <Tab key={index}>
              <button
                ref={(element) => {
                  refs.current[index] = element;
                }}
                onClick={() => setSelected(index)}
                className={style.tab}
                style={{ color: selected === index ? 'var(--black100)' : '' }}>
                {item}
              </button>
            </Tab>
          );
        })}
      </>
    );
  };

  export const TabItems: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <TabList style={{ margin: 0, padding: 0 }}>
        <div className={style.tabs}>{children}</div>
      </TabList>
    );
  };

  export const Head: FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className={style.head}>{children}</div>;
  };

  export const Warden: FC<{ username: string }> = ({ username }) => {
    return (
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
            <span className={style.title}>Привет {username},</span>
            <span className={style.description}>
              Добро пожаловать в нашу репорт-систему под названием Warden,
              <br />
              которая помогает держать порядок на нашем сервере.
            </span>
          </div>
          <Button
            styles={{ color: 'var(--black100)', background: 'var(--white100)', height: '46px' }}>
            Начать использование
          </Button>
        </div>
      </div>
    );
  };

  export const Body: FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div>{children}</div>;
  };
}
