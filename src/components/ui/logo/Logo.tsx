import React, { FC } from 'react';
// @ts-ignore
import style from './Logo.module.scss';
import { Link } from 'react-router-dom';
import { LogoIcon } from '../../icons/Icons';

interface LogoI {
  styles?: any;
  type?: string;
  width?: string;
  height?: string;
}

export const Logo: FC<LogoI> = ({ styles, type, width, height }) => {
  return (
    <Link className={style.logo} style={{ ...styles, width: width, height: height }} to={'/'}>
      <LogoIcon width={width} height={height} />
    </Link>
  );
};
