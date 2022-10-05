import style from "./BrandBook.module.scss";
import React, { FC } from "react";
import { Button } from "../../ui/button/Button";

export namespace BrandBook {
  export const Heading: FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className={style.heading}>{children}</div>;
  };

  export const HeadingColumn: FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className={style.column}>{children}</div>;
  };

  export const HeadingColumnHeading: FC<{ children: React.ReactNode }> = ({ children }) => {
    return <div className={style.heading}>{children}</div>;
  };

  export const HeadingColumnHeadingTitle: FC<{ children: React.ReactNode }> = ({ children }) => {
    return <span className={style.title}>{children}</span>;
  };

  export const HeadingColumnHeadingDescription: FC<{ children: React.ReactNode }> = ({ children }) => {
    return <span className={style.description}>{children}</span>;
  };

  export const Branding: FC<{ children: React.ReactNode }> = ({ children }) => {
    return <span className={style.branding}>{children}</span>;
  };

  export const BrandingItem: FC<{ children: React.ReactNode, title: string, description?: string }> = ({
                                                                                                        title,
                                                                                                        description,
                                                                                                        children
                                                                                                      }) => {
    return (
      <div className={style.item}>
        <div className={style.heading}>
          <span className={style.title}>{title}</span>
          <span className={style.description}>{description}</span>
        </div>
        <div className={style.images}>
          {children}
        </div>
      </div>
    );
  };

  export const BrandingItemImagesItem: FC<{ styles?: any, heightImage: number, widthImage: number, background: string, image: string }> = ({
                                                                                                                                             styles,
                                                                                                                                             heightImage,
                                                                                                                                             widthImage,
                                                                                                                                             background,
                                                                                                                                             image
                                                                                                                                           }) => {
    return (
      <div className={style.item} style={{ ...styles, background: `url(${background})` }}>
        <div className={style.buttons}>
          <Button>PNG</Button>
          <Button>SVG</Button>
        </div>
        <img height={heightImage} width={widthImage} src={image} alt="" />
      </div>
    );
  };
}