import style from './Subscription.module.scss';
import { CheckIcon, StarIcon, StarBackgroundIcon, Star } from '../../icons/Icons';
import { Button } from '../../ui/button/Button';
import { Modal } from '../../modal/Modal';
import React, { FC, Suspense, useCallback, useState } from 'react';
import VisaIcon from '../../../static/images/payment/logo/Visa.svg';
import MasterCardIcon from '../../../static/images/payment/logo/MasterCard.svg';
import MirIcon from '../../../static/images/payment/logo/Mir.svg';
import QIWIIcon from '../../../static/images/payment/logo/QIWI.svg';
import SBPIcon from '../../../static/images/payment/logo/SBP.svg';
import modalStyle from '../../modal/Modal.module.scss';
import { ButtonsSlider } from '../../ui/buttonsSlider/ButtonsSlider';
import { PaymentItems, PremiumItem, PremiumPlusItem } from '../../../utils/Items';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { SubscriptionService } from '../../../services/SubscriptionService';
import toast from 'react-hot-toast';
import { errorToast } from '../../../utils/Theme';
import { motion, MotionConfig, useMotionValue } from 'framer-motion';
import { multipleStarModalAnimation, starModalAnimation } from '../../../utils/Animations';

interface SubscriptionModalInterface {
  type: number;
  state: { value: boolean; setHandler: React.Dispatch<any> };
  handlers: Array<any>;
}

export namespace Subscription {
  export const Head = () => {
    const { isAuth, user, isLoading } = useTypedSelector((state) => state.auth);

    return (
      <>
        <div className={style.head}>
          <h1 className={style.title}>Платные подписки</h1>
          <span className={style.description}>
            Получите новые впечатления от игры и уникальные функции на нашем сайте с временной
            подпиской
          </span>
        </div>
      </>
    );
  };

  const SubscriptionModal: FC<SubscriptionModalInterface> = ({ state, handlers, type }) => {
    return (
      <>
        <Modal.BackDrop state={state.value} setState={state.setHandler}>
          <Modal.Wrapper setState={state.setHandler}>
            <motion.div
              className={style.lol}
              variants={multipleStarModalAnimation}
              initial={'initial'}>
              <StarIcon width={5000} height={5000} />
            </motion.div>
            <Modal.Content width={500} setState={state.setHandler}>
              <div className={modalStyle.header}>
                <h1 className={modalStyle.title}>
                  Покупка подписки{' '}
                  {type === 1 ? (
                    <span>Premium</span>
                  ) : (
                    <span className={style.textGradient}>Premium +</span>
                  )}
                </h1>
              </div>
              <div className={modalStyle.body}>
                <span className={modalStyle.text}>
                  Выберите удобную для Вас подписку и платежную систему
                </span>
                <ButtonsSlider
                  styles={{ height: '60px' }}
                  items={type === 1 ? PremiumItem : PremiumPlusItem}
                  onStateChanged={(newState) => handlers[0](newState)}
                />
                <ButtonsSlider
                  styles={{ height: '60px' }}
                  items={PaymentItems}
                  onStateChanged={(newState) => handlers[1](newState)}
                />
              </div>
              <div className={modalStyle.footer}>
                <Button
                  onClick={handlers[3]}
                  styles={{
                    backgroundColor: 'var(--black100)',
                    color: 'var(--white100)',
                    height: '48px',
                    border: 'none'
                  }}>
                  Оплатить
                </Button>
                <Button
                  onClick={() => state.setHandler(false)}
                  styles={{
                    height: '48px'
                  }}>
                  Вернуться назад
                </Button>
              </div>
            </Modal.Content>
          </Modal.Wrapper>
        </Modal.BackDrop>
      </>
    );
  };

  export const Body = () => {
    const { isAuth, user } = useTypedSelector((state) => state.auth);

    const [isOpen, setIsOpen0] = useState(false);
    const [modal, setModal] = useState(0);

    const [merchantSelected, setMerchantSelected] = useState(0);
    const [periodSelected, setPeriodSelected] = useState(0);

    const setIsOpen = (state: boolean) => {
      setMerchantSelected(0);
      setPeriodSelected(0);
      setIsOpen0(state);
    };

    const openModal = (current: number) => {
      if (!isAuth) {
        toast.error(
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-1)'
            }}>
            <span
              style={{
                color: 'var(--white100)',
                fontWeight: 'var(--fontWeights-semibold)'
              }}>
              Ошибка
            </span>
            <span
              style={{
                color: 'var(--white60)',
                fontWeight: 'var(--fontWeights-medium)',
                fontSize: 'var(--fontSizes-0)'
              }}>
              Для этого действия необходимо войти в аккаунт
            </span>
          </div>,
          errorToast
        );
        return;
      }

      setIsOpen(true);
      setModal(current);
    };

    const [charging, setCharging] = useState(false);

    const charge = () => {
      if (!isAuth) {
        toast.error(
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-1)'
            }}>
            <span
              style={{
                color: 'var(--white100)',
                fontWeight: 'var(--fontWeights-semibold)'
              }}>
              Ошибка
            </span>
            <span
              style={{
                color: 'var(--white60)',
                fontWeight: 'var(--fontWeights-medium)',
                fontSize: 'var(--fontSizes-0)'
              }}>
              Для этого действия необходимо войти в аккаунт
            </span>
          </div>,
          errorToast
        );
        return;
      }

      if (charging) {
        return;
      }

      setCharging(true);

      SubscriptionService.chargeSubscribe(modal, merchantSelected, periodSelected)
        .then((response) => {
          window.location.replace(response.payment_url);
        })
        .catch((error) => {
          toast.error(
            () => (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-1)'
                }}>
                <span
                  style={{
                    color: 'var(--white100)',
                    fontWeight: 'var(--fontWeights-semibold)'
                  }}>
                  Ошибка
                </span>
                <span
                  style={{
                    color: 'var(--white60)',
                    fontWeight: 'var(--fontWeights-medium)',
                    fontSize: 'var(--fontSizes-0)'
                  }}>
                  {error}
                </span>
              </div>
            ),
            errorToast
          );
          setCharging(false);
        });
    };

    return (
      <>
        <SubscriptionModal
          type={modal}
          state={{ value: isOpen, setHandler: setIsOpen }}
          handlers={[setPeriodSelected, setMerchantSelected, charge]}
        />

        <div className={style.body}>
          <div className={style.subscriptionPanel}>
            <div className={style.functions}>
              <div className={style.item}>
                <span className={style.title}>Функции</span>
              </div>
              <div className={style.item}>
                <span className={style.text}>Бесплатный подбор противников</span>
              </div>
              <div className={style.item}>
                <span className={style.text}>Премиум-подбор соперников</span>
              </div>
              <div className={style.item}>
                <span className={style.text}>Блокировка матчмейкинга</span>
              </div>
              <div className={style.item}>
                <span className={style.text}>Без рекламы</span>
              </div>
              <div className={style.item}>
                <span className={style.text}>Анимированная обложка профиля</span>
              </div>
              <div className={style.item}>
                <span className={style.text}>Приоритетная возможность стать капитаном</span>
              </div>
              <div className={style.item}>
                <span className={style.text}>Выбор карты</span>
              </div>
              <div className={style.item}>
                <span className={style.text}>Премиум-поддержка клиентов</span>
              </div>
              <div className={style.item}>
                <span className={style.text}>Значок за подписку</span>
              </div>
            </div>
            <div className={style.free}>
              <div className={style.item}>
                <span className={style.title}>Бесплатно</span>
                <span className={style.description}>Основные особенности</span>
              </div>
              <div className={style.item}>
                <span className={style.textIcon}>
                  <CheckIcon width={24} height={24} />
                </span>
                <span className={style.textHidden}>Бесплатный подбор противников</span>
              </div>
              <div className={style.item}>
                <span className={style.textIcon}></span>
              </div>
              <div className={style.item}>
                <span className={style.textIcon}></span>
              </div>
              <div className={style.item}>
                <span className={style.textIcon}></span>
              </div>
              <div className={style.item}>
                <span className={style.textIcon}></span>
              </div>
              <div className={style.item}>
                <span className={style.textIcon}></span>
              </div>
              <div className={style.item}>
                <span className={style.textIcon}></span>
              </div>
              <div className={style.item}>
                <span className={style.textIcon}></span>
              </div>
              <div className={style.item}>
                <span className={style.textIcon}></span>
              </div>
            </div>
            <div className={style.premium}>
              <div className={style.item}>
                <span className={style.title}>
                  <span>Premium</span>
                </span>
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-2)'
                  }}>
                  <Button
                    onClick={() => openModal(1)}
                    styles={{
                      width: '100%'
                    }}>
                    Подписаться на Premium
                  </Button>
                  <div className={style.description}>
                    <span className={style.text}>Стоимость всего от</span>
                    <span className={style.price}>99 ₽ / Месяц</span>
                  </div>
                </div>
              </div>
              <div className={style.item}>
                <span className={style.textIcon}>
                  <CheckIcon width={24} height={24} />
                </span>
                <span className={style.textHidden}>Бесплатный подбор противников</span>
              </div>
              <div className={style.item}>
                <span className={style.textIcon}>
                  <CheckIcon width={24} height={24} />
                </span>
                <span className={style.textHidden}>Премиум-подбор соперников</span>
              </div>
              <div className={style.item}>
                <span
                  className={style.textIcon}
                  style={{ fontSize: '15px', fontWeight: 'var(--fontWeights-medium)' }}>
                  1 слот
                </span>
                <span className={style.textHidden}>Блокировка матчмейкинга</span>
              </div>
              <div className={style.item}>
                <span className={style.textIcon}>
                  <CheckIcon width={24} height={24} />
                </span>
                <span className={style.textHidden}>Без рекламы</span>
              </div>
              <div className={style.item}>
                <span className={style.textIcon}>
                  <CheckIcon width={24} height={24} />
                </span>
                <span className={style.textHidden}>Анимированная обложка профиля</span>
              </div>
              <div className={style.item}>
                <span className={style.textIcon}></span>
                <span className={style.textHidden}>Приоритетная возможность стать капитаном</span>
              </div>
              <div className={style.item}>
                <span className={style.textIcon}></span>
              </div>
              <div className={style.item}>
                <span className={style.textIcon}></span>
              </div>
              <div className={style.item} style={{ gap: 'var(--space-2)' }}>
                <span className={style.textHidden}>Значок за подписку</span>
                <span className={style.textIconPremium}>
                  <StarBackgroundIcon width={24} height={24} />
                </span>
              </div>
            </div>
            <div className={style.premiumPlus}>
              <div className={style.item}>
                <span className={style.title}>
                  <span className={style.textGradient}>Premium +</span>
                </span>
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-2)'
                  }}>
                  <Button
                    onClick={() => openModal(2)}
                    styles={{
                      width: '100%',
                      backgroundColor: 'var(--black100)',
                      color: 'var(--white100)',
                      border: 'none'
                    }}>
                    Подписаться на Premium +
                  </Button>
                  <div className={style.description}>
                    <span className={style.text}>Стоимость всего от</span>
                    <span className={style.price}>249 ₽ / Месяц</span>
                  </div>
                </div>
              </div>
              <div className={style.item}>
                <span className={style.textIcon}>
                  <CheckIcon width={24} height={24} />
                </span>
                <span className={style.textHidden}>Бесплатный подбор противников</span>
              </div>
              <div className={style.item}>
                <span className={style.textIcon}>
                  <CheckIcon width={24} height={24} />
                </span>
                <span className={style.textHidden}>Премиум-подбор соперников</span>
              </div>
              <div className={style.item}>
                <span
                  className={style.textIcon}
                  style={{
                    fontSize: 'var(--fontSizes-2)',
                    fontWeight: 'var(--fontWeights-medium)'
                  }}>
                  3 слота
                </span>
                <span className={style.textHidden}>Блокировка матчмейкинга</span>
              </div>
              <div className={style.item}>
                <span className={style.textIcon}>
                  <CheckIcon width={24} height={24} />
                </span>
                <span className={style.textHidden}>Без рекламы</span>
              </div>
              <div className={style.item}>
                <span className={style.textIcon}>
                  <CheckIcon width={24} height={24} />
                </span>
                <span className={style.textHidden}>Анимированная обложка профиля</span>
              </div>
              <div className={style.item}>
                <span className={style.textIcon}>
                  <CheckIcon width={24} height={24} />
                </span>
                <span className={style.textHidden}>Приоритетная возможность стать капитаном</span>
              </div>
              <div className={style.item}>
                <span className={style.textIcon}>
                  <CheckIcon width={24} height={24} />
                </span>
                <span className={style.textHidden}>Выбор карты</span>
              </div>
              <div className={style.item}>
                <span className={style.textIcon}>
                  <CheckIcon width={24} height={24} />
                </span>
                <span className={style.textHidden}>Премиум-поддержка клиентов</span>
              </div>
              <div className={style.item} style={{ gap: 'var(--space-2)' }}>
                <span className={style.textHidden}>Значок за подписку</span>
                <span className={style.textIconPremium}>
                  <StarIcon width={24} height={24} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
}
