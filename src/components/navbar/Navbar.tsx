import style from './Navbar.module.scss';
import React, { FC, useLayoutEffect, useState } from 'react';
import { Button } from '../ui/button/Button';
import { Avatar } from '../ui/avatar/Avatar';
import { Logo } from '../ui/logo/Logo';
import { Sidebar } from '../sidebar/Sidebar';
import { Items, NotifySidebar, ProfileItems } from '../../utils/Items';
import { CloseIcon, LightIcon, SearchIcon } from '../icons/Icons';
import { Container } from '../ui/container/Container';
import { Modal } from '../modal/Modal';
import modalStyle from '../modal/Modal.module.scss';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { promiseToast } from '../../utils/Toasts';
import { useLocation, useNavigate } from 'react-router-dom';
import { Input } from '../ui/input/Input';
import { AnimatePresence } from 'framer-motion';
import disableScroll from 'disable-scroll';

interface Navbar {
  items: {
    settings: { header: { show: boolean; content: React.CElement<any, any> } };
    items: Items;
    additionalItems?: { show: boolean; items: Items };
    footerItems?: { show: boolean; items: Items };
  };
}

interface NavbarModal {
  state: { value: boolean; setHandler: React.Dispatch<any> };
  token: { value: string; setHandler: React.Dispatch<any> };
  handlers: Array<any>;
}

interface NotificationButton {
  handlers: Array<any>;
}

const NavbarModal: FC<NavbarModal> = ({ state, handlers, token }) => {
  return (
    <Modal.BackDrop state={state.value} setState={state.setHandler}>
      <Modal.Wrapper setState={state.setHandler}>
        <Modal.Content width={350} setState={state.setHandler}>
          <div className={modalStyle.header}>
            <h1 className={modalStyle.title}>Войти в свой аккаунт</h1>
          </div>
          <div className={modalStyle.body}>
            <span className={modalStyle.text}>Вставьте Ваш токен авторизации для входа</span>
            <div className={modalStyle.textInput}>
              <span className={modalStyle.text}>Токен</span>
              <div className={modalStyle.inputWrapper}>
                <input
                  placeholder="https://api.vime.world/web/token/"
                  value={token.value}
                  onChange={(e) => token.setHandler(e.target.value)}
                  className={modalStyle.input}
                />
              </div>
            </div>
          </div>
          <div className={modalStyle.footer}>
            <Button
              styles={{
                backgroundColor: 'var(--black100)',
                color: 'var(--white100)',
                height: '48px',
                border: 'none'
              }}
              onClick={handlers[0]}>
              Войти
            </Button>
            <Button
              styles={{
                height: '48px'
              }}
              onClick={() => state.setHandler(false)}>
              Вернуться назад
            </Button>
          </div>
        </Modal.Content>
      </Modal.Wrapper>
    </Modal.BackDrop>
  );
};

const NotificationButton: FC<NotificationButton> = ({ handlers }) => {
  return (
    <Button styles={{ padding: 0, height: '40px', width: '40px' }} onClick={handlers[0]}>
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          height: 20,
          right: -6,
          top: -9,
          zIndex: 10,
          color: 'rgb(255, 255, 255)',
          background: 'rgb(233, 73, 73) none repeat scroll 0% 0%',
          justifyContent: 'center',
          alignItems: 'center',
          lineHeight: 15,
          fontWeight: 500,
          borderRadius: 8,
          fontSize: 10,
          minWidth: 20
        }}>
        <span style={{ padding: '0px 6px', maxWidth: 20 }}>9+</span>
      </div>
      <LightIcon width={24} height={24} />
    </Button>
  );
};

export const Navbar: FC<Navbar> = ({ items }) => {
  const { isAuth, user, error } = useTypedSelector((state) => state.auth);
  const { login, logout } = useActions();
  const location = useLocation();
  const [token, setToken] = useState('');
  const [isOpenModalAuth, setIsOpenModalAuth] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [open, setOpen]: any = useState({
    state: false,
    settings: null,
    sideItems: null,
    additionalItems: null,
    footerItems: null
  });
  const openSidebar = (items: any) => {
    setOpen({
      state: true,
      settings: items.settings,
      sideItems: items.items,
      additionalItems: items.additionalItems,
      footerItems: items.footerItems
    });
  };
  const auth = () => {
    const authPromise = new Promise((resolve, reject) => {
      login(token, resolve, reject);
    }).finally(() => setIsOpenModalAuth(false));

    promiseToast(
      authPromise,
      { title: 'Успешно', subTitle: 'Вы успешно вошли в аккаунт' },
      { title: 'Ошибка' },
      { title: 'Загрузка', subTitle: 'Подождите немного' }
    );
  };

  const navigate = useNavigate();
  const toPlay = () => navigate('/play');

  useLayoutEffect(() => {
    if (open.state) {
      disableScroll.on();
    } else {
      disableScroll.off();
    }
  }, [open.state]);

  return (
    <>
      <NavbarModal
        state={{ value: isOpenModalAuth, setHandler: setIsOpenModalAuth }}
        token={{ value: token, setHandler: setToken }}
        handlers={[auth]}
      />
      <div className={style.backDrop}>
        <Container>
          <header className={style.headerWrapper}>
            {isOpenSearch && (
              <div className={style.hiddenSearch}>
                <Input
                  placeholder={'Поиск по сайту..'}
                  options={{ useFocus: false }}
                  styles={{ width: '100%', height: '10%' }}
                />
                <Button
                  styles={{
                    padding: '0',
                    border: 'none',
                    height: '48px',
                    minWidth: '48px',
                    backgroundColor: 'var(--black04)'
                  }}
                  onClick={() => setIsOpenSearch(false)}>
                  <CloseIcon width={24} height={24} />
                </Button>
              </div>
            )}

            {!isOpenSearch && (
              <div className={style.header}>
                <Logo width={35.7} height={42} />
                {location.pathname !== '/' && (
                  <Input
                    placeholder={'Поиск по сайту..'}
                    styles={{
                      left: '106px',
                      minWidth: '470px',
                      height: '46px'
                    }}
                    options={{ useFocus: true }}
                    icon={{ position: 'left', item: <SearchIcon /> }}
                    className={style.hiddenInput}
                  />
                )}
                <div className={style.menu}>
                  {location.pathname !== '/' ? (
                    <Button
                      styles={{ padding: 0, height: '40px', width: '40px' }}
                      onClick={() => setIsOpenSearch(true)}>
                      <SearchIcon />
                    </Button>
                  ) : null}
                  {isAuth && (
                    <>
                      <Button onClick={toPlay}>Играть</Button>
                      <NotificationButton handlers={[() => openSidebar(NotifySidebar)]} />
                      <Button
                        styles={{
                          border: 'none',
                          outline: 'none',
                          padding: '0'
                        }}
                        onClick={() => openSidebar(ProfileItems(user, logout))}>
                        <Avatar
                          username={user.name}
                          styles={{ height: '40px', width: '40px' }}
                          widthPremium={14}
                          heightPremium={14}
                        />
                      </Button>
                    </>
                  )}
                  <Button
                    styles={{
                      display: !isAuth ? 'flex' : 'none',
                      backgroundColor: 'var(--black100)',
                      color: 'var(--white100)',
                      border: 'none'
                    }}
                    onClick={() => setIsOpenModalAuth(true)}>
                    Войти в свой аккаунт
                  </Button>

                  <button className={style.buttonDots} onClick={() => openSidebar(items)}>
                    ·
                  </button>
                </div>
              </div>
            )}
          </header>
        </Container>
      </div>

      <AnimatePresence>
        {open.state && (
          <Sidebar
            settings={open.settings}
            state={open}
            setState={setOpen}
            items={open.sideItems}
            additionalItems={open.additionalItems}
            footerItems={open.footerItems}
          />
        )}
      </AnimatePresence>
    </>
  );
};
