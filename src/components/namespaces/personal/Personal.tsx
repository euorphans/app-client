import style from './Personal.module.scss';
import React from 'react';
import { Button } from '../../ui/button/Button';

export namespace Personal {
  export const Head = () => {
    return (
      <>
        <div className={style.head}>
          <h1 className={style.title}>Персонал платформы</h1>
          <span className={style.description}>Информация о персонале нашей платформы</span>
        </div>
      </>
    );
  };
  export const Body = () => {
    return (
      <>
        <div className={style.body}>
          <Button className={style.item}></Button>
          <Button className={style.item}></Button>
          <Button className={style.item}></Button>
        </div>
      </>
    );
  };
}
