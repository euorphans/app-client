import style from './BrandBook.module.scss';
import React, {FC} from "react";

export namespace BrandBook {

    export const Heading: FC<{ children: React.ReactNode }> = ({children}) => {
        return (
            <div className={style.heading}>{children}</div>
        )
    };

    export const HeadingColumn: FC<{ children: React.ReactNode }> = ({children}) => {
        return (
            <div className={style.column}>{children}</div>
        )
    };

    export const HeadingTitle: FC<{ children: React.ReactNode }> = ({children}) => {
        return (
            <span className={style.title}>{children}</span>
        )
    };

    export const HeadingDescription: FC<{ children: React.ReactNode }> = ({children}) => {
        return (
            <span className={style.description}>{children}</span>
        )
    };

    export const Lol: FC<{ children: React.ReactNode }> = ({children}) => {
        return (
            <div className={style.title}>{children}</div>
        )
    };
}