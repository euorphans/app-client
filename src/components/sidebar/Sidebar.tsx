import style from './Sidebar.module.scss';
import React, { FC, useCallback, useEffect, useLayoutEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ItemsT } from '../../utils/Items';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { motion } from 'framer-motion';
import { sidebarAnimation } from '../../utils/Animations';
import { Button } from '../ui/button/Button';
import { CloseIcon } from '../icons/Icons';

interface SidebarSettingsInterface {
  settings?: { header: { show: boolean; content: React.CElement<any, any> }; close?: boolean };
}

interface SidebarInterface extends SidebarSettingsInterface {
  items: ItemsT;
  additionalItems?: { show: boolean; items: ItemsT };
  footerItems?: { show: boolean; items: ItemsT };
  setState?: any;
  state?: any;
  styles?: any;
  backdropStyles?: any;
}

interface SidebarHeaderInterface extends SidebarSettingsInterface {
  state: { value: boolean; setHandler: React.Dispatch<any> };
}

interface SidebarBodyInterface {
  items: ItemsT;
}

interface SidebarAdditionalInterface {
  items: ItemsT;
}

const SidebarHeader: FC<SidebarHeaderInterface> = ({ state, settings }) => {
  return (
    <div className={style.header}>
      {settings?.header.show && <>{settings?.header.content}</>}
      {settings && settings.close && (
        <Button
          styles={{ padding: '0', width: '40px', height: '40px', border: 'none' }}
          onClick={() =>
            state.setHandler({ state: false, sideItems: Object.entries(state).slice(-1) })
          }>
          <CloseIcon width={'22px'} height={'22px'} />
        </Button>
      )}
    </div>
  );
};

const SidebarBody: FC<SidebarBodyInterface> = ({ items }) => {
  return (
    <div className={style.body}>
      {items.map((item, key) => (
        <Link onClick={item.onClick} key={key} to={item.path} className={style.link}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};

const SidebarAdditional: FC<SidebarAdditionalInterface> = ({ items }) => {
  return (
    <div style={{ marginTop: '28px' }} className={style.bodySecond}>
      {items.map((item, key) => (
        <Link onClick={item.onClick} key={key} to={item.path} className={style.link}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};

const SidebarFooter: FC<SidebarAdditionalInterface> = ({ items }) => {
  return (
    <>
      <div className={style.header}>
        <span className={style.text}>
          <span className={style.black}>Приглашай друзей</span> и начинайте играть вместе, ведь так
          веселее!
        </span>
        <div className={style.buttons}>
          <Button>play.dangerzone.su</Button>
        </div>
      </div>
      <div className={style.separator}>
        <div className={style.line}></div>
      </div>
      <div className={style.socials}>
        {items.map((item, key) => (
          <a
            onClick={item.onClick}
            key={key}
            target={'_blank'}
            href={item.path}
            className={style.link}
            rel="noreferrer">
            {item.icon?.element}
          </a>
        ))}
      </div>
    </>
  );
};

export const Sidebar: FC<SidebarInterface> = ({
  items,
  setState,
  state,
  settings,
  additionalItems,
  footerItems,
  styles,
  backdropStyles
}) => {
  const { user, isAuth } = useTypedSelector((state) => state.auth);
  const { logout } = useActions();
  const [location, setLocation] = React.useState('');
  const locationRef = useLocation();

  useLayoutEffect(() => {
    if (location === '') {
      setLocation(locationRef.pathname);
    } else {
      setState(false);
    }
  }, [locationRef.pathname]);

  const escFunction = useCallback((event: any) => {
    if (event.key === 'Escape') {
      setState(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, []);

  return (
    <motion.div
      variants={sidebarAnimation}
      initial={'initial'}
      animate={'animate'}
      exit={'exit'}
      className={style.backdrop}
      style={{ ...backdropStyles }}>
      <div className={style.spaceArea} onClick={() => setState(false)}></div>
      <div className={style.sidebarWrapper} style={{ ...styles }}>
        <div className={style.sidebar}>
          <div className={style.sidebarContent}>
            <div className={style.headerBodyWrapper}>
              <SidebarHeader state={{ value: state, setHandler: setState }} settings={settings} />
              <SidebarBody items={items} />
              {additionalItems?.show && <SidebarAdditional items={additionalItems.items} />}
            </div>
            <div style={{ marginTop: '28px' }} className={style.footer}>
              {footerItems?.show && (
                <>
                  <SidebarFooter items={footerItems.items} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
