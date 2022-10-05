// @ts-ignore
import style from './PlayerSettings.module.scss';
import React, { FC, useRef } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { Avatar } from '../../ui/avatar/Avatar';
import {
  AddImageIcon,
  DiscordIcon,
  DotsIcon,
  StarBackgroundIcon,
  StarIcon,
  VkIcon,
  YouTubeIcon
} from '../../icons/Icons';
import { Input } from '../../ui/input/Input';
import { Button } from '../../ui/button/Button';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import axios, { AxiosResponse } from 'axios';
import { config } from '../../../config';
// @ts-ignore
import premiumCover from '../../../static/images/premiumCover.svg';
import { Modal } from '../../modal/Modal';
// @ts-ignore
import modalStyle from '../../modal/Modal.module.scss';
import { useNavigate } from 'react-router-dom';
import { createState, useState } from '@hookstate/core';
import { Switch } from '../../ui/switch/Switch';

export namespace PlayerSettings {
  const globalState = createState({
    tab: 1
  });

  export const Head: FC = () => {
    return (
      <>
        <div className={style.head}>
          <span className={style.title}>Настройки профиля</span>
        </div>
      </>
    );
  };
  export const Body: FC = () => {
    const { user } = useTypedSelector((state) => state.auth);
    const Ref: any = useRef(null);
    const [file, setFile]: any = React.useState(false);

    const handleClick = () => {
      Ref.current.click();
    };

    const selectFile = (e: any) => {
      console.log(e.target.files[0]);
      setFile({ file: e.target.files[0] });
    };

    const uploadFile = (e?: any) => {
      const formData = new FormData();
      formData.append('image', file.file);

      console.log(formData, file);

      axios
        .put(`${config.apiURL}user/banner`, formData)
        .then((response: AxiosResponse) => {
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    const applyChanges = () => {
      uploadFile();
    };

    const [isOpenModal, setIsOpenModal] = React.useState(false);

    const navigate = useNavigate();
    const toSubscription = () => navigate('/subscription');

    const ref: any = useRef(null);
    const state = useState(globalState);

    const selectTab = (id: number) => {
      state.tab.set(id);
    };

    const [switchState, setSwitchState] = React.useState(false);

    return (
      <>
        <Modal.BackDrop state={isOpenModal} setState={setIsOpenModal}>
          <Modal.Wrapper setState={setIsOpenModal}>
            <Modal.Content width={350}>
              <div className={modalStyle.header}>
                <h1 className={modalStyle.title}>Изменить обложку в профиле</h1>
              </div>
              <div className={modalStyle.body}>
                <span className={modalStyle.text}>
                  Загрузите новую обложку для страницы вашего профиля. Мы рекомендуем загружать
                  изображения в разрешении 1463x300. Максимум 5мб.
                </span>
                <input
                  ref={Ref}
                  style={{ display: 'none' }}
                  type={'file'}
                  accept={'image/*'}
                  onChange={(event) => selectFile(event)}
                />
              </div>
              <div className={modalStyle.footer}>
                <Button
                  styles={{
                    backgroundColor: 'var(--black100)',
                    color: 'var(--white100)',
                    height: '48px',
                    border: 'none'
                  }}
                  onClick={handleClick}>
                  Выбрать файл
                </Button>
                <Button
                  styles={{
                    height: '48px'
                  }}
                  onClick={() => setIsOpenModal(false)}>
                  Вернуться назад
                </Button>
              </div>
            </Modal.Content>
          </Modal.Wrapper>
        </Modal.BackDrop>

        <div className={style.body}>
          <div className={style.menu}>
            <div className={style.menuHeader}>
              <div
                className={style.tabItem}
                ref={state.tab.get() === 1 ? ref : null}
                style={{ color: state.tab.value === 1 ? 'var(--black100)' : 'var(--black40)' }}
                onClick={() => selectTab(1)}>
                Аккаунт
              </div>
              <div
                className={style.tabItem}
                ref={state.tab.get() === 2 ? ref : null}
                style={{ color: state.tab.value === 2 ? 'var(--black100)' : 'var(--black40)' }}
                onClick={() => selectTab(2)}>
                Другое
              </div>
            </div>

            {state.tab.value === 1 ? (
              <div className={style.menuBody}>
                <div className={style.account}>
                  <div className={style.coverWrapper}>
                    <div className={style.cover}>
                      <img
                        src={`https://api.dangerzone.su/user/banner/${user.name}?t=${Date.now()}`}
                        alt=""
                      />
                      <div className={style.editCoverHiddenWrapper}>
                        <div className={style.editCoverHidden} onClick={() => setIsOpenModal(true)}>
                          <div className={style.wrapperIcon}>
                            {/*<input*/}
                            {/*  ref={Ref}*/}
                            {/*  type={'file'}*/}
                            {/*  name={'file'}*/}
                            {/*  onChange={(e) => selectFile(e)}*/}
                            {/*/>*/}
                            <AddImageIcon width={'18px'} height={'18px'} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={style.avatarWrapper}>
                      <div className={style.avatar}>
                        <Avatar
                          username={user.name}
                          widthPremium={'30px'}
                          heightPremium={'30px'}
                          styles={{ width: '123px', height: '123px', margin: '-5px' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={style.contentWrapper}>
                    <div className={style.forms}>
                      <div className={style.itemsTop}>
                        <div className={style.item}>
                          <span className={style.title}>Статус</span>
                          <Input
                            options={{ useFocus: false }}
                            styles={{ height: '46px' }}
                            placeholder={'Какое у Вас сейчас настроение?'}
                          />
                        </div>
                      </div>
                      <div className={style.itemsBottom}>
                        <div className={style.header}>
                          <span className={style.title}>Социальные сети</span>
                          <span className={style.description}>
                            {file && file.name}
                            Добавьте свои существующие социальные ссылки
                          </span>
                        </div>
                        <div className={style.items}>
                          <div className={style.item}>
                            <span className={style.title}>Ссылка на сайт</span>
                            <Input
                              options={{ useFocus: false }}
                              styles={{ height: '46px' }}
                              placeholder={'https://'}
                            />
                          </div>
                          <div className={style.item}>
                            <span className={style.title}>Discord</span>
                            <div className={style.inputWrapperButton}>
                              <Input
                                options={{ useFocus: false }}
                                styles={{ height: '46px' }}
                                icon={{
                                  position: 'left',
                                  item: <DiscordIcon width={'18px'} height={'18px'} />
                                }}
                                placeholder={'Тег'}
                              />
                              <Button
                                styles={{
                                  height: '36px',
                                  gap: 'var(--space-3)',
                                  alignItems: 'center',
                                  position: 'absolute',
                                  right: '6px',
                                  top: '6px',
                                  backgroundColor: 'transparent',
                                  border: 'none',
                                  color: 'var(--black100)',
                                  opacity: 0.6
                                }}>
                                <span>Привязать</span>
                              </Button>
                            </div>
                          </div>
                          <div className={style.item}>
                            <span className={style.title}>ВКонтакте</span>
                            <Input
                              options={{ useFocus: false }}
                              styles={{ height: '46px' }}
                              icon={{
                                position: 'left',
                                item: <VkIcon width={'18px'} height={'18px'} />
                              }}
                              placeholder={'https://vk.com/'}
                            />
                          </div>
                          <div className={style.item}>
                            <span className={style.title}>YouTube</span>
                            <Input
                              options={{ useFocus: false }}
                              styles={{ height: '46px' }}
                              icon={{
                                position: 'left',
                                item: <YouTubeIcon width={'18px'} height={'18px'} />
                              }}
                              placeholder={'https://youtube.com/'}
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <Button
                          styles={{
                            border: 'none',
                            backgroundColor: 'var(--black100)',
                            color: 'var(--white100)',
                            height: '56px',
                            fontSize: 'var(--fontSizes-2)'
                          }}
                          onClick={applyChanges}>
                          Сохранить изменения
                        </Button>
                      </div>
                    </div>
                    <div className={style.verification}>
                      <img src={premiumCover} alt="" />
                      <div className={style.wrapper}>
                        <div className={style.text}>
                          <span className={style.title}>Платная подписка Premium</span>
                          <span className={style.description}>
                            Получите новые впечатления от игры и уникальные функции на нашем сайте с
                            временной подпиской
                          </span>
                        </div>
                        <Button onClick={toSubscription}>Посмотреть</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={style.menuBody}>
                <div className={style.other}>
                  <div className={style.info}>
                    <span className={style.title}>Другое</span>
                    <span className={style.description}>Гибкие настройки для Вашего профиля</span>
                  </div>
                  <div className={style.otherSettings}>
                    <div className={style.item}>
                      <div className={style.info}>
                        <span className={style.title}>Видимость своего доната</span>
                        <span className={style.description}>
                          Видимость своего значка доната перед другими игроками
                        </span>
                      </div>
                      <Switch state={{ value: switchState, setHandler: setSwitchState }} />
                    </div>
                    <div className={style.item}>
                      <div className={style.info}>
                        <span className={style.title}>Видимость доната игроков</span>
                        <span className={style.description}>
                          Видимость значка доната всех игроков лично для Вас
                        </span>
                      </div>
                      <Switch state={{ value: switchState, setHandler: setSwitchState }} />
                    </div>
                    <div className={style.item}>
                      <div className={style.info}>
                        <span className={style.title}>Звуковое оповещение</span>
                        <span className={style.description}>
                          Возможность выключить, включить или изменить звуковое оповещение
                          <br /> при нахождении игры
                        </span>
                      </div>
                      <div className={style.buttons}>
                        <Switch state={{ value: switchState, setHandler: setSwitchState }} />
                        <Button styles={{ width: '40px', height: '40px' }}>
                          <DotsIcon />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  };
}
