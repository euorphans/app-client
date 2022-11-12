import React, { FC } from 'react';
import style from './Subscription.module.scss';
import { RainbowText } from '../../rainbowText/RainbowText';
import { ComponentInterface } from '../../../types';
import { Avatar } from '../../ui/avatar/Avatar';
import { Button } from '../../ui/button/Button';
import ReactSkinview3d from 'react-skinview3d';
import { AnimatePresence, motion, useTransform, useViewportScroll } from 'framer-motion';
import { arrowAnimation } from '../../../utils/Animations';
import { ArrowIcon } from '../../icons/Icons';

// @ts-ignore
import wallpaper from '../../../static/images/wallpaperSample.gif';

interface SubscriptionModalInterface {
  type: number;
  state: { value: boolean; setHandler: React.Dispatch<any> };
  handlers: Array<any>;
}

export namespace Subscription {
  export const Wrapper: FC<ComponentInterface> = ({ children }) => {
    return <div className={style.wrapper}>{children}</div>;
  };

  export const Intro = () => {
    return (
      <div className={style.introWrapper}>
        <div className={style.intro}>
          <RainbowText
            styles={{ fontSize: 'var(--fontSizes-16)', lineHeight: '160px' }}
            blur={false}>
            Premium+
          </RainbowText>
          <span className={style.description}>
            Получите новые впечатления от игры и уникальные функции
            <br /> на нашем сайте с временной подпиской
          </span>
        </div>
        <Button
          styles={{
            background: 'var(--white100)',
            fontSize: 'var(--fontSizes-1)',
            width: '300px',
            height: '50px'
          }}>
          Купить подписку
        </Button>
        <div className={style.bottomText}>
          <span>Узнать подробнее</span>
          <AnimatePresence>
            <motion.div
              className={style.icon}
              variants={arrowAnimation}
              initial={'initial'}
              animate={'animate'}
              exit={'exit'}>
              <ArrowIcon height={28} width={28} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  };

  export const AnimatedWallpaper = () => {
    return (
      <div className={style.animatedWallpaperWrapper}>
        <div className={style.cover}>
          <div className={style.coverImageButtonWrapper}>
            <div className={style.imageButton}>
              <div className={style.imageWrapper}>
                <img src={wallpaper} alt="" />
              </div>
            </div>
          </div>
          <div className={style.coverAvatar}>
            <Avatar
              username={'k1arov'}
              widthPremium={30}
              heightPremium={30}
              styles={{ margin: '-5px' }}
            />
          </div>
        </div>
        <div className={style.text}>
          <span className={style.title}>Анимированная обложка профиля</span>
          <span className={style.description}>
            Получите возможность украсить свой профиль анимированной обложкой
          </span>
        </div>
      </div>
    );
  };

  export const ExclusiveIcon = () => {
    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 0.4], [0.2, 1]);

    return (
      <motion.div
        className={style.exclusiveIconWrapper}
        style={{ scale, transition: 'var(--transition15)' }}>
        <motion.div
          style={{
            scaleY: scrollYProgress,
            transition: 'var(--transition15)'
          }}
        />
        <div className={style.number}>Уникальность 100%</div>
        <div className={style.exclusiveIcon}>
          <ReactSkinview3d
            skinUrl={`https://skin.vimeworld.com/raw/skin/Orphans.png`}
            capeUrl={`https://skin.vimeworld.com/raw/cape/Orphans.png`}
            height="550"
            width="250"
          />
          <div className={style.information}>
            <div className={style.avatarTitle}>
              <motion.div whileHover={{ scale: 1.2 }} className={style.avatar}>
                <Avatar
                  username={`Orphans`}
                  widthPremium={40}
                  heightPremium={40}
                  styles={{ width: '100%', height: '100%', padding: '4px' }}
                />
              </motion.div>
              <span className={style.title}>
                Эксклюзивный значок
                <br /> в игре и на сайте
              </span>
            </div>
            <span className={style.description}>
              Включить или выключить его
              <br /> можно в настройках профиля
            </span>
          </div>
        </div>
      </motion.div>
    );
  };
}
