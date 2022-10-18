import style from '../../footer/Footer.module.scss';
import { Logo } from '../../ui/logo/Logo';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { RoutesEnum } from '../../../router';

export namespace Footer {
  export const ItemLeft = () => {
    return (
      <div className={style.itemLeft}>
        <Logo styles={{ justifyContent: 'center' }} />
      </div>
    );
  };

  export const Links = () => {
    const links = [
      {
        name: 'Ссылки',
        items: [
          {
            title: 'Правила организации',
            link: RoutesEnum.RULES_PAGE
          },
          {
            title: 'Платные подписки',
            link: RoutesEnum.SUBSCRIPTION_PAGE
          },
          {
            title: 'Персонал',
            link: RoutesEnum.PERSONAL_PAGE
          },
          {
            title: 'Брендбук',
            link: RoutesEnum.BRANDBOOK_PAGE
          }
        ]
      }
    ];

    return links.map((item) => {
      return (
        <div className={style.item}>
          <span className={style.title}>{item.name}</span>
          {item.items.map((item) => {
            return (
              <Link to={item.link} className={style.text}>
                {item.title}
              </Link>
            );
          })}
        </div>
      );
    });
  };
}
