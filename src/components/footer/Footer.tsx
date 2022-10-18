import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import style from './Footer.module.scss';
import { Logo } from '../ui/logo/Logo';
import { Container } from '../ui/container/Container';
import VisaIcon from '../../static/images/payment/logo/Visa.svg';
import MasterCardIcon from '../../static/images/payment/logo/MasterCard.svg';
import MirIcon from '../../static/images/payment/logo/Mir.svg';
import { RoutesEnum } from '../../router';
import { DiscordIcon, TelegramIcon, VkIcon, YouTubeIcon } from '../icons/Icons';
import { Footer } from '../namespaces/footer/Footer';

export const FooterLayout: FC = () => {
  const location = useLocation();

  const socials = [
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

  const allLinks = [
    {
      links: {
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
      },
      other: {
        name: 'Другое',
        items: [
          {
            title: 'Другие наши проекты',
            link: '/projects'
          },
          {
            title: 'Сотрудничество',
            link: '/partnership'
          },
          {
            title: 'Центр поддержки',
            link: '/support'
          },
          {
            title: 'API',
            link: '/api'
          }
        ]
      }
    }
  ];

  return (
    <Container>
      <footer>
        <div className={style.head}>
          <Footer.ItemLeft />
          {allLinks.map(({ links, other }) => {
            return (
              <div className={style.item}>
                <span className={style.title}>{other.name}</span>
                {other.items.map((item) => {
                  return (
                    <Link to={item.link} className={style.text}>
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            );
          })}
          <div className={style.item} style={{ justifyContent: 'space-between' }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-4)'
              }}>
              <span className={style.title}>Наше сообщество</span>
              <div className={style.socials}>
                {socials.map(({ icon, link }) => {
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
        </div>
        <div className={style.body}>
          <div className={style.item}>Danger Zone Production</div>
          <div className={style.item}>
            <Link to={location.pathname === RoutesEnum.TERMS_PAGE ? '#' : RoutesEnum.TERMS_PAGE}>
              Пользовательское соглашение
            </Link>
            <Link to={RoutesEnum.PRIVACY_PAGE}>Политика конфиденциальности</Link>
          </div>
        </div>
      </footer>
    </Container>
  );
};
