// @ts-ignore
import style from './Play.module.scss';
// @ts-ignore
import modalStyle from '../../modal/Modal.module.scss';
import React from 'react';
import { TabList, Tabs, Tab, TabPanel } from 'react-tabs';
import { createState, useState } from '@hookstate/core';
import { Button } from '../../ui/button/Button';
import { Modal } from '../../modal/Modal';
import { ButtonsSlider } from '../../ui/buttonsSlider/ButtonsSlider';
import { pickSelection } from '../../../utils/Items';
import { CloseIcon } from '../../icons/Icons';

import BW2v2 from '../../../static/images/BedWars/BW2v2.png';
import BW4v4 from '../../../static/images/BedWars/BW4v4.png';
import BW6v6 from '../../../static/images/BedWars/BW6v6.png';

const globalState = createState({ tab: 0 });

export namespace Play {
  export const Head = () => {
    const state = useState(globalState);

    return (
      <>
        {state.tab.get() ? (
          <div className={style.head}>
            <div className={style.leftInfo}>
              <div className={style.headTitle}>
                <span
                  className={style.title}
                  style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                  <Button
                    styles={{ width: '40px', height: '40px', padding: '0' }}
                    onClick={() => state.tab.set(0)}>
                    <CloseIcon />
                  </Button>{' '}
                  Выберите тип
                </span>
              </div>
              <div className={style.headDescription}>
                <span>Выберите тип для начала рейтинговой игры</span>
              </div>
            </div>
            <div className={style.rightButton}>
              <ButtonsSlider styles={{ height: '32px' }} items={pickSelection} />
            </div>
          </div>
        ) : (
          <div className={style.head}>
            <div className={style.leftInfo}>
              <div className={style.headTitle}>
                <span className={style.title}>Выберите формат</span>
              </div>
              <div className={style.headDescription}>
                <span>Выберите формат для начала рейтинговой игры</span>
              </div>
            </div>
            <div className={style.rightButton}>
              <ButtonsSlider styles={{ height: '32px' }} items={pickSelection} />
            </div>
          </div>
        )}
      </>
    );
  };
  export const Body = () => {
    const state = useState(globalState);
    const [isOpen, setIsOpen] = React.useState(false);

    const openModal = () => {
      setIsOpen(true);
    };

    return (
      <>
        <Modal.BackDrop state={isOpen}>
          <Modal.Wrapper setState={setIsOpen}>
            <Modal.Content width={350}>
              <div className={modalStyle.header}>
                <h1 className={modalStyle.title}>
                  Подбор игроков на режиме{' '}
                  {state.tab.get() === 1 ? '2v2' : state.tab.get() === 2 ? '4v4' : '6v6'}
                </h1>
              </div>
              <div className={modalStyle.body}>
                <span className={modalStyle.text}>
                  Перезагрузка страницы приведет к отключению Вас из очереди
                </span>
                <div className={modalStyle.textInput}>
                  <span className={modalStyle.text}>Игроки:</span>
                  {state.tab.get() === 1 ? (
                    <span>
                      {5} в подборе, осталось {8 - Number(5)}
                    </span>
                  ) : state.tab.get() === 2 ? (
                    <span>
                      {5} в подборе, осталось {8 - Number(5)}
                    </span>
                  ) : (
                    <span>
                      {5} в подборе, осталось {8 - Number(5)}
                    </span>
                  )}
                </div>
              </div>
              <div className={modalStyle.footer}>
                <Button
                  onClick={() => openModal()}
                  styles={{
                    backgroundColor: 'var(--black100)',
                    color: 'var(--white100)',
                    height: '48px',
                    border: 'none'
                  }}>
                  Отменить поиск
                </Button>
              </div>
            </Modal.Content>
          </Modal.Wrapper>
        </Modal.BackDrop>

        <Tabs>
          <div className={style.body}>
            {state.tab.get() === 0 ? (
              <TabList className={style.format}>
                <Tab
                  style={{ backgroundImage: `url(${BW2v2})` }}
                  className={style.item}
                  onClick={() => state.tab.set(1)}>
                  <div className={style.info}>
                    <h1 className={style.title}>2v2</h1>
                    <span className={style.online}>В подборе: 5</span>
                  </div>
                </Tab>
                <Tab
                  style={{ backgroundImage: `url(${BW4v4})` }}
                  className={style.item}
                  onClick={() => state.tab.set(2)}>
                  <div className={style.info}>
                    <h1 className={style.title}>4v4</h1>
                    <span className={style.online}>В подборе: 5</span>
                  </div>
                </Tab>
                <Tab
                  style={{ backgroundImage: `url(${BW6v6})` }}
                  className={style.item}
                  onClick={() => state.tab.set(3)}>
                  <div className={style.info}>
                    <h1 className={style.title}>6v6</h1>
                    <span className={style.online}>В подборе: 5</span>
                  </div>
                </Tab>
              </TabList>
            ) : (
              ''
            )}
            {state.tab.get() !== 0 ? (
              <>
                <TabPanel className={style.mode}>
                  <button
                    className={style.item}
                    onClick={() =>
                      state.tab.get() === 1
                        ? openModal()
                        : state.tab.get() === 2
                        ? openModal()
                        : openModal()
                    }>
                    <span className={style.sticker}>👼</span>
                    <h1 className={style.title}>Одиночный</h1>
                  </button>
                  <button className={style.item}>
                    <span className={style.sticker}>👯‍♀️</span>
                    <h1 className={style.title}>С друзьями</h1>
                  </button>
                </TabPanel>
              </>
            ) : (
              ''
            )}
          </div>
        </Tabs>
      </>
    );
  };
}
