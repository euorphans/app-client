// @ts-ignore
import style from './Button.module.scss';
import React, { FC, MouseEventHandler } from 'react';
import { ComponentInterface } from '../../../models/interfaces/Component.interface';

type ButtonI = ComponentInterface;

export const Button: FC<ButtonI> = ({ children, styles, onClick }) => {
  return (
    <button className={style.button} style={styles} onClick={onClick}>
      {children}
    </button>
  );
};
