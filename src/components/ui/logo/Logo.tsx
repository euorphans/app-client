import React, { FC } from 'react';
// @ts-ignore
import style from './Logo.module.scss';
import { Link } from 'react-router-dom';
import { LogoIcon } from '../../icons/Icons';

interface LogoI {
  customStyles?: any;
  type?: string;
  width?: string;
  height?: string;
}

export const Logo: FC<LogoI> = ({ customStyles, type, width, height }) => {
  return (
    <Link className={style.logo} style={{ ...customStyles, width: width, height: height }} to={'/'}>
      <LogoIcon width={width} height={height} />
    </Link>
  );
};
