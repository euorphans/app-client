import React, { FC } from 'react';
import style from './Subscription.module.scss';
import { RainbowText } from '../../rainbowText/RainbowText';
import { PremiumBackgroundGradient } from '../../icons/Icons';
import { ComponentInterface } from '../../../types';
import { Avatar } from '../../ui/avatar/Avatar';

interface SubscriptionModalInterface {
  type: number;
  state: { value: boolean; setHandler: React.Dispatch<any> };
  handlers: Array<any>;
}

export namespace Subscription {
  export const Wrapper: FC<ComponentInterface> = ({ children }) => {
    return <div className={style.wrapperBlock}>{children}</div>;
  };

  export const Intro = () => {
    return (
      <div className={style.block}>
        <RainbowText styles={{ fontSize: 'var(--fontSizes-14)' }} blur={false}>
          Premium+
        </RainbowText>
      </div>
    );
  };

  export const ExclusiveIcon = () => {
    return (
      <div className={style.block}>
        <div className={style.player}>
          <div className={style.avatar}>
            <Avatar
              username={'Orphans'}
              widthPremium={30}
              heightPremium={30}
              styles={{ width: '123px', height: '123px', margin: '-5px' }}
            />
          </div>
        </div>
        <div className={style.title}>
          <h1>Эксклюзивный значок игре и на сайте</h1>
        </div>
      </div>
    );
  };
}
