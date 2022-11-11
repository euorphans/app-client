import style from './Loader.module.css';
import React, { FC } from 'react';
import ContentLoader from 'react-content-loader';
import { ComponentInterface } from '../../types';

interface SkeletonLoader extends ComponentInterface {
  background?: string;
  foreground?: string;
  isLoading: boolean;
  items: Array<{ element: React.CElement<any, any> }>;
  viewBox?: string;
}

export const Loader: FC = () => {
  return (
    <div className={style.loaderWrapper}>
      <div className={style.loader}></div>
    </div>
  );
};

export const SkeletonLoader: FC<SkeletonLoader> = ({
  background,
  viewBox,
  styles,
  foreground,
  isLoading,
  children,
  items
}) => {
  return !isLoading ? (
    <ContentLoader
      speed={2}
      viewBox={viewBox ? viewBox : '0 0 476 124'}
      backgroundColor={background ? background : 'var(--black04)'}
      foregroundColor={foreground ? foreground : 'var(--white100)'}
      style={{ ...styles }}>
      {items.map((item) => (
        <>{item.element}</>
      ))}
    </ContentLoader>
  ) : (
    <>{children}</>
  );
};
