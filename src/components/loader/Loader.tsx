// @ts-ignore
import style from './Loader.module.css';
import React, { FC } from 'react';
import ContentLoader from 'react-content-loader';

interface SkeletonLoaderI {
  background?: string;
  foreground?: string;
  children: React.ReactNode;
  isLoading: boolean;
  items: Array<{ element: React.CElement<any, any> }>;
  viewBox?: string;
  customStyles?: any;
}

export const Loader: FC = () => {
  return (
    <div className={style.loaderWrapper}>
      <div className={style.loader}></div>
    </div>
  );
};

export const SkeletonLoader: FC<SkeletonLoaderI> = ({
  background,
  viewBox,
  customStyles,
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
      style={{ ...customStyles }}>
      {items.map((item) => (
        <>{item.element}</>
      ))}
    </ContentLoader>
  ) : (
    <>{children}</>
  );
};
