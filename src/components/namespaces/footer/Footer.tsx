import style from './Footer.module.scss';
import { Logo } from '../../ui/logo/Logo';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { RoutesEnum } from '../../../router';
import { DiscordIcon, TelegramIcon, VkIcon, YouTubeIcon } from '../../icons/Icons';
import VisaIcon from '../../../static/images/payment/logo/Visa.svg';
import MasterCardIcon from '../../../static/images/payment/logo/MasterCard.svg';
import MirIcon from '../../../static/images/payment/logo/Mir.svg';
import { ComponentInterface } from '../../../models/interfaces/Component.interface';

interface Footer extends ComponentInterface {
  topPeace?: boolean;
}

export namespace Footer {
  export const Header: FC<Footer> = ({ children, topPeace }) => {
    return <>{topPeace && <div className={style.header}>{children}</div>}</>;
  };

  export const Wallpaper = () => {
    return (
      <div className={style.wallpaper}>
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

    return (
      <>
        {links.map((item) => {
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
        })}
      </>
    );
  };

  export const Other = () => {
    const other = [
      {
        name: 'Другое',
        items: [
          {
            title: 'Другие наши проекты',
            link: RoutesEnum.HOME_PAGE
          },
          {
            title: 'Сотрудничество',
            link: RoutesEnum.HOME_PAGE
          },
          {
            title: 'Центр поддержки',
            link: RoutesEnum.HOME_PAGE
          },
          {
            title: 'API',
            link: RoutesEnum.HOME_PAGE
          }
        ]
      }
    ];

    return (
      <>
        {other.map((item) => {
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
        })}
      </>
    );
  };

  export const Community = () => {
    const community = [
      {
        name: 'Telegram',
        icon: <TelegramIcon width={22} height={22} />,
        link: 'https://vk.com/dangerzonevw'
      },
      {
        name: 'Discord',
        icon: <DiscordIcon width={22} height={22} />,
        link: 'https://vk.com/dangerzonevw'
      },
      {
        name: 'YouTube',
        icon: <YouTubeIcon width={22} height={22} />,
        link: 'https://vk.com/dangerzonevw'
      },
      {
        name: 'VK',
        icon: <VkIcon width={22} height={22} />,
        link: 'https://vk.com/dangerzonevw'
      }
    ];

    return (
      <div className={style.item}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-4)'
          }}>
          <span className={style.title}>Наше сообщество</span>
          <div className={style.community}>
            {community.map(({ icon, link }) => {
              return (
                <a
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  target={'_blank'}
                  href={link}
                  rel="noreferrer">
                  {icon}
                </a>
              );
            })}
          </div>
        </div>
        <div className={style.bottom}>
          <img style={{ width: '49px', height: '16px' }} src={VisaIcon} alt="" />
          <img style={{ width: '30.29px', height: '19px' }} src={MasterCardIcon} alt="" />
          <img style={{ width: '59px', height: '16.09px' }} src={MirIcon} alt="" />
        </div>
      </div>
    );
  };

  export const Footer = () => {
    return (
      <div className={style.footer}>
        <div className={style.item}>Danger Zone Production</div>
        <div className={style.item}>
          <Link to={RoutesEnum.TERMS_PAGE}>Пользовательское соглашение</Link>
          <Link to={RoutesEnum.PRIVACY_PAGE}>Политика конфиденциальности</Link>
        </div>
      </div>
    );
  };
}
