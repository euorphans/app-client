import React, { FC } from 'react';
import style from './Logo.module.scss';
import { Link } from 'react-router-dom';
import { LogoIcon } from '../../icons/Icons';

interface Logo {
  styles?: any;
  width?: number;
  height?: number;
}

export const Logo: FC<Logo> = ({ styles, width, height }) => {
  return (
    <Link className={style.logo} style={{ ...styles, width: width, height: height }} to={'/'}>
      <LogoIcon width={width} height={height} />
    </Link>
  );
};
