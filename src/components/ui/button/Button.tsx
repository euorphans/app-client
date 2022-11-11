// @ts-ignore
import style from './Button.module.scss';
import React, { FC } from 'react';
import { ComponentInterface } from '../../../types';

export const Button: FC<ComponentInterface> = ({ children, styles, onClick }) => {
  return (
    <button className={style.button} style={styles} onClick={onClick}>
      {children}
    </button>
  );
};
