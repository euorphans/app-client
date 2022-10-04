// @ts-ignore
import style from './Container.module.scss';
import React, { FC } from 'react';

interface ContainerI {
  children: React.ReactNode;
}

export const Container: FC<ContainerI> = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};
