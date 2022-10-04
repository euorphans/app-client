import React, { FC } from 'react';
import style from './RainbowText.module.scss';
import { ComponentInterface } from '../../models/interfaces/Component.interface';

interface RainbowTextInterface extends ComponentInterface {
  blur: boolean;
}

export const RainbowText: FC<RainbowTextInterface> = ({ children, blur, styles, className }) => {
  return (
    <span
      className={className ? `${style.textGradientAll} ${className}` : style.textGradientAll}
      style={styles}>
      <span className={style.textGradient}>{children}</span>
      {blur && <span className={style.textGradientBlur}>{children}</span>}
    </span>
  );
};
