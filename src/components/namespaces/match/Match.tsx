// @ts-ignore
import style from './Match.module.scss';
import { Button } from '../../ui/button/Button';
import { Avatar } from '../../ui/avatar/Avatar';
import { Tab, TabList, Tabs } from 'react-tabs';
import { createState, useState } from '@hookstate/core';
import React, { useEffect, useRef } from 'react';

export namespace Match {
  const globalState = createState({
    tab: 1,
    sizes: 0
  });

  export const Head = () => {
    const ref: any = useRef(null);
    const state = useState(globalState);

    useEffect(() => {
      ref.current ? state.sizes.set(ref.current.offsetWidth) : 0;
    }, [state.tab.get()]);

    const selectTab = (id: number) => {
      state.tab.set(id);
    };

    return (
      <>
        <Tabs style={{ gap: 'var(--space-6)', display: 'flex', flexDirection: 'column' }}>
          <TabList style={{ margin: 0, padding: 0 }}>
            <div className={style.tabs}>
              <div
                className={style.border}
                style={{
                  transform:
                    state.tab.get() === 1
                      ? 'translateX(0px)'
                      : state.tab.get() === 2
                      ? 'translateX(63px)'
                      : 'translateX(170px)',
                  width: state.sizes.get()
                }}></div>
              <Tab>
                <button
                  onClick={() => selectTab(1)}
                  ref={state.tab.get() === 1 ? ref : null}
                  style={{ color: state.tab.get() === 1 ? 'var(--black100)' : 'var(--black60)' }}
                  className={style.tab}>
                  Матч
                </button>
              </Tab>
              <Tab>
                <button
                  onClick={() => selectTab(2)}
                  ref={state.tab.get() === 2 ? ref : null}
                  style={{ color: state.tab.get() === 2 ? 'var(--black100)' : 'var(--black60)' }}
                  className={style.tab}>
                  Статистика
                </button>
              </Tab>
              <Tab>
                <button
                  onClick={() => selectTab(3)}
                  ref={state.tab.get() === 3 ? ref : null}
                  style={{ color: state.tab.get() === 3 ? 'var(--black100)' : 'var(--black60)' }}
                  className={style.tab}>
                  Настройки
                </button>
              </Tab>
            </div>
          </TabList>
        </Tabs>
        <div className={style.head}>
          <div className={style.item}>
            <span className={style.titleTeam}>team_orphans</span>
            <button className={style.avatarButton}>
              <Avatar
                widthPremium={'14px'}
                heightPremium={'14px'}
                username={'Orphans'}
                styles={{ width: '40px', height: '40px' }}
              />
            </button>
          </div>
          <div className={style.item}>
            <span className={style.textStage}>4v4</span>
            <span className={style.titleStage}>Выбор карты</span>
            <span className={style.textStage}>Лучший из 1</span>
          </div>
          <div className={style.item}>
            <button className={style.avatarButton}>
              <Avatar
                widthPremium={'14px'}
                heightPremium={'14px'}
                username={'Jassix'}
                styles={{ width: '40px', height: '40px' }}
              />
            </button>
            <span className={style.titleTeam}>team_jassix</span>
          </div>
        </div>
      </>
    );
  };
  export const Body = () => {
    const team = [
      {
        username: 'Orphans',
        kills: 32,
        deaths: 23,
        kd: 3.18,
        mvp: false,
        evp: true
      },
      {
        username: 'wassty',
        kills: 32,
        deaths: 23,
        kd: 3.18,
        mvp: true,
        evp: false
      },
      {
        username: 'Jassix',
        kills: 32,
        deaths: 23,
        kd: 3.18,
        mvp: false,
        evp: false
      },
      {
        username: 'Erelima',
        kills: 32,
        deaths: 23,
        kd: 3.18,
        mvp: false,
        evp: false
      }
    ];

    return (
      <>
        <div className={style.bodyMatch}>
          <div className={style.item}>
            <div className={style.player}>
              <div className={style.defaultInfo}>
                <button className={style.avatarButton}>
                  <Avatar
                    widthPremium={'14px'}
                    heightPremium={'14px'}
                    username={'Orphans'}
                    styles={{ width: '40px', height: '40px' }}
                  />
                </button>
                <span className={style.username}>Orphans</span>
              </div>
              <div className={style.executionInfo}>
                <div className={style.executionInfoLeft}>
                  <div className={style.executionInfoLeftTitle}>Всего</div>
                  <div className={style.executionInfoLeftDescription}>
                    <span className={style.text}>3</span>
                    <span className={style.title}>Матчи</span>
                  </div>
                </div>
                <div className={style.executionInfoRight}>
                  <div className={style.executionInfoRightTitle}>Последние 20 матчей</div>
                  <div className={style.executionInfoRightDescription}>
                    <div className={style.executionInfoRightDescriptionItem}>
                      <span className={style.text}>36%</span>
                      <span className={style.title}>Побед</span>
                    </div>
                    <div className={style.executionInfoRightDescriptionItem}>
                      <span className={style.text}>21</span>
                      <span className={style.title}>Убийств</span>
                    </div>
                    <div className={style.executionInfoRightDescriptionItem}>
                      <span className={style.text}>0,83</span>
                      <span className={style.title}>K/D</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.player}>
              <div className={style.defaultInfo}>
                <button className={style.avatarButton}>
                  <Avatar
                    widthPremium={'14px'}
                    heightPremium={'14px'}
                    username={'_d4ckiller'}
                    styles={{ width: '40px', height: '40px' }}
                  />
                </button>
                <span className={style.username}>_d4ckiller</span>
              </div>
              <div className={style.executionInfo}>
                <div className={style.executionInfoLeft}>
                  <div className={style.executionInfoLeftTitle}>Всего</div>
                  <div className={style.executionInfoLeftDescription}>
                    <span className={style.text}>3</span>
                    <span className={style.title}>Матчи</span>
                  </div>
                </div>
                <div className={style.executionInfoRight}>
                  <div className={style.executionInfoRightTitle}>Последние 20 матчей</div>
                  <div className={style.executionInfoRightDescription}>
                    <div className={style.executionInfoRightDescriptionItem}>
                      <span className={style.text}>16%</span>
                      <span className={style.title}>Побед</span>
                    </div>
                    <div className={style.executionInfoRightDescriptionItem}>
                      <span className={style.text}>11</span>
                      <span className={style.title}>Убийств</span>
                    </div>
                    <div className={style.executionInfoRightDescriptionItem}>
                      <span className={style.text}>0,33</span>
                      <span className={style.title}>K/D</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.itemStage}>
            <div className={style.itemStageHead}>
              <span className={style.title}>Время для подключения к Discord</span>
              <span className={style.timer}>03:12</span>
            </div>
            <div className={style.itemStageBody}>
              <div style={{ display: 'none' }} className={style.maps}>
                <div className={style.map}>
                  <div className={style.info}>
                    <img src="https://i.imgur.com/rWVJi6C.png" alt="" />
                    <span className={style.name}>Фортис</span>
                  </div>
                  <Button styles={{ backgroundColor: 'var(--black100)', color: 'var(--white100)' }}>
                    Бан
                  </Button>
                </div>
                <div className={style.map}>
                  <div className={style.info}>
                    <img src="https://i.imgur.com/kTafZFs.png" alt="" />
                    <span className={style.name}>Зимперия</span>
                  </div>
                  <Button styles={{ backgroundColor: 'var(--black100)', color: 'var(--white100)' }}>
                    Бан
                  </Button>
                </div>
                <div className={style.map}>
                  <div className={style.info}>
                    <img src="https://i.imgur.com/kx3jh90.png" alt="" />
                    <span className={style.name}>Замки</span>
                  </div>
                  <Button styles={{ backgroundColor: 'var(--black100)', color: 'var(--white100)' }}>
                    Бан
                  </Button>
                </div>
                <div className={style.map}>
                  <div className={style.info}>
                    <img src="https://i.imgur.com/g7OF3AH.png" alt="" />
                    <span className={style.name}>Критаз</span>
                  </div>
                  <Button styles={{ backgroundColor: 'var(--black100)', color: 'var(--white100)' }}>
                    Бан
                  </Button>
                </div>
                <div className={style.map}>
                  <div className={style.info}>
                    <img src="https://i.imgur.com/LPop0cH.png" alt="" />
                    <span className={style.name}>Алоз</span>
                  </div>
                  <Button styles={{ backgroundColor: 'var(--black100)', color: 'var(--white100)' }}>
                    Бан
                  </Button>
                </div>
              </div>
              <div className={style.mapDiscord}>
                <div className={style.item}>
                  <div className={style.itemTitleButton}>
                    <span className={style.title}>Карта</span>
                  </div>
                  <div className={style.map}>
                    <div className={style.info}>
                      <img src="https://i.imgur.com/rWVJi6C.png" alt="" />
                      <span className={style.name}>Фортис</span>
                    </div>
                  </div>
                </div>
                <div className={style.item}>
                  <div className={style.itemTitleButton}>
                    <span className={style.title}>Голосовой канал</span>
                  </div>
                  <div className={style.inputWrapper}>
                    <input
                      type={'text'}
                      readOnly
                      value={'https://discord.com/invite/kbjrHZsCPd'}
                      className={style.input}
                    />
                    <Button
                      styles={{
                        backgroundColor: 'var(--black100)',
                        color: 'var(--white100)',
                        border: 'none'
                      }}>
                      Копировать
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className={style.hiddenVS}>VS</h1>
          <div className={style.item}>
            <div className={style.player}>
              <div className={style.defaultInfo}>
                <button className={style.avatarButton}>
                  <Avatar
                    widthPremium={'14px'}
                    heightPremium={'14px'}
                    username={'Jassix'}
                    styles={{ width: '40px', height: '40px' }}
                  />
                </button>
                <span className={style.username}>Jassix</span>
              </div>
              <div className={style.executionInfo}>
                <div className={style.executionInfoLeft}>
                  <div className={style.executionInfoLeftTitle}>Всего</div>
                  <div className={style.executionInfoLeftDescription}>
                    <span className={style.text}>1</span>
                    <span className={style.title}>Матчи</span>
                  </div>
                </div>
                <div className={style.executionInfoRight}>
                  <div className={style.executionInfoRightTitle}>Последние 20 матчей</div>
                  <div className={style.executionInfoRightDescription}>
                    <div className={style.executionInfoRightDescriptionItem}>
                      <span className={style.text}>0%</span>
                      <span className={style.title}>Побед</span>
                    </div>
                    <div className={style.executionInfoRightDescriptionItem}>
                      <span className={style.text}>3</span>
                      <span className={style.title}>Убийств</span>
                    </div>
                    <div className={style.executionInfoRightDescriptionItem}>
                      <span className={style.text}>0,1</span>
                      <span className={style.title}>K/D</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.player}>
              <div className={style.defaultInfo}>
                <button className={style.avatarButton}>
                  <Avatar
                    widthPremium={'14px'}
                    heightPremium={'14px'}
                    username={'wassty'}
                    styles={{ width: '40px', height: '40px' }}
                  />
                </button>
                <span className={style.username}>wassty</span>
              </div>
              <div className={style.executionInfo}>
                <div className={style.executionInfoLeft}>
                  <div className={style.executionInfoLeftTitle}>Всего</div>
                  <div className={style.executionInfoLeftDescription}>
                    <span className={style.text}>1</span>
                    <span className={style.title}>Матчи</span>
                  </div>
                </div>
                <div className={style.executionInfoRight}>
                  <div className={style.executionInfoRightTitle}>Последние 20 матчей</div>
                  <div className={style.executionInfoRightDescription}>
                    <div className={style.executionInfoRightDescriptionItem}>
                      <span className={style.text}>0%</span>
                      <span className={style.title}>Побед</span>
                    </div>
                    <div className={style.executionInfoRightDescriptionItem}>
                      <span className={style.text}>3</span>
                      <span className={style.title}>Убийств</span>
                    </div>
                    <div className={style.executionInfoRightDescriptionItem}>
                      <span className={style.text}>0,1</span>
                      <span className={style.title}>K/D</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.bodyStat}>
          <div className={style.item}>
            <div className={style.headItem}>
              <div className={style.team}>
                <button className={style.avatarButton}>
                  <Avatar
                    widthPremium={'14px'}
                    heightPremium={'14px'}
                    username={'Orphans'}
                    styles={{ width: '35px', height: '35px' }}
                  />
                </button>
                <span className={style.name}>team_orphans</span>
              </div>
              <span className={style.result} style={{ color: 'var(--green)' }}>
                Победители
              </span>
            </div>
            <div className={style.bodyItem}>
              <table className={style.statistic}>
                <thead>
                  <th style={{ width: '23%' }}>Игрок</th>
                  <th style={{ width: '17%' }}>Убийств</th>
                  <th style={{ width: '17%' }}>Смертей</th>
                  <th style={{ width: '10%' }}>K/D</th>
                  <th style={{ width: '8%' }}>MVP</th>
                  <th style={{ width: '10%' }}>EVP</th>
                </thead>
                <tbody>
                  {team.map(
                    (
                      item: {
                        username: string;
                        kills: number;
                        deaths: number;
                        kd: number;
                        mvp: boolean;
                        evp: boolean;
                      },
                      key: number
                    ) => (
                      <tr key={key}>
                        <td>
                          <span>{item.username}</span>
                        </td>
                        <td>{item.kills}</td>
                        <td>{item.deaths}</td>
                        <td>{item.kd}</td>
                        <td>
                          <span>{item.mvp ? '+' : '-'}</span>
                        </td>
                        <td>
                          <span>{item.evp ? '+' : '-'}</span>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className={style.item}>
            <div className={style.headItem}>
              <div className={style.team}>
                <button className={style.avatarButton}>
                  <Avatar
                    widthPremium={'14px'}
                    heightPremium={'14px'}
                    username={'Jassix'}
                    styles={{ width: '35px', height: '35px' }}
                  />
                </button>
                <span className={style.name}>team_jassix</span>
              </div>
              <span className={style.result} style={{ color: 'var(--red)' }}>
                Проигравшие
              </span>
            </div>
            <div className={style.bodyItem}>
              <table className={style.statistic}>
                <thead>
                  <th style={{ width: '23%' }}>Игрок</th>
                  <th style={{ width: '17%' }}>Убийств</th>
                  <th style={{ width: '17%' }}>Смертей</th>
                  <th style={{ width: '10%' }}>K/D</th>
                  <th style={{ width: '8%' }}>MVP</th>
                  <th style={{ width: '10%' }}>EVP</th>
                </thead>
                <tbody>
                  {team.map(
                    (
                      item: {
                        username: string;
                        kills: number;
                        deaths: number;
                        kd: number;
                        mvp: boolean;
                        evp: boolean;
                      },
                      key: number
                    ) => (
                      <tr key={key}>
                        <td>
                          <span>{item.username}</span>
                        </td>
                        <td>{item.kills}</td>
                        <td>{item.deaths}</td>
                        <td>{item.kd}</td>
                        <td>
                          <span>{item.mvp ? '+' : '-'}</span>
                        </td>
                        <td>
                          <span>{item.evp ? '+' : '-'}</span>
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  };
}
