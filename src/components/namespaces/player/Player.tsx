// @ts-ignore
import style from './Player.module.scss';
import {Button} from '../../ui/button/Button';
import {Avatar} from '../../ui/avatar/Avatar';
import {AddIcon, DiscordIcon, DotsIcon, ShareIcon, TelegramIcon, VkIcon} from '../../icons/Icons';
import {Link, useParams} from 'react-router-dom';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import React, {FC, useEffect, useRef} from 'react';
import {createState, useState} from '@hookstate/core';
import {Modal} from '../../modal/Modal';
import {Popover, PopoverWrapper} from '../../popover/Popover';
import {useTypedSelector} from '../../../hooks/useTypedSelector';
import {NotFound} from '../notFound/NotFound';
import {UserInterface} from '../../../models/interfaces/User.interface';
import {RoutesEnum} from '../../../router';
import modalStyle from '../../modal/Modal.module.scss';

import BW2v2 from '../../../static/images/BedWars/BW2v2.png';
import BW4v4 from '../../../static/images/BedWars/BW4v4.png';
import BW6v6 from '../../../static/images/BedWars/BW6v6.png';

const globalState = createState({
    tab: 1,
    sizes: 0,
    wrapperSize: 0
});

const userState = createState(null);

interface FanModalInterface {
    state: { value: boolean; setHandler: React.Dispatch<any> };
    handlers: Array<any>;
    type: string;
    users?: Array<string>;
}

export namespace Player {
    export const Initialization: FC<{ children: React.ReactNode; user: UserInterface }> = ({
                                                                                               children,
                                                                                               user
                                                                                           }) => {
        const {username} = useParams();
        const state: any = useState(userState);
        state.set(user);

        return state.user.get() ? (
            <>{children}</>
        ) : (
            <NotFound.Body
                title={'404'}
                subTitle={
                    'Нам не удалось найти данного игрока в нашей базе данных, возможно, он еще не авторизовался'
                }
            />
        );
    };

    const FanModal: FC<FanModalInterface> = ({type, state, handlers}) => {
        return (
            <Modal.BackDrop state={state.value} setState={state.setHandler}>
                <Modal.Wrapper setState={state.setHandler}>
                    <Modal.Content width={350} height={400} setState={state.setHandler}>
                        <div className={modalStyle.header}>
                            <h1 className={modalStyle.title}>
                                {type === 'followers' ? 'Подписчики' : 'Подписки'}
                            </h1>
                        </div>
                        <div className={modalStyle.body}>
                            <div className={modalStyle.modalItem}>
                                <div className={modalStyle.modalItemProfile}>
                                    <Link to={'/player/wassty'}>
                                        <Avatar username={'wassty'} styles={{width: 40, height: 40}}/>
                                    </Link>
                                    <div className={modalStyle.modalItemUser}>
                                        <Link className={modalStyle.modalUsername} to={'/player/wassty'}>
                                            wassty
                                        </Link>
                                        <span className={modalStyle.modalUserFollowers}>123.1к подписчиков</span>
                                    </div>
                                </div>
                                <Button
                                    styles={{
                                        border: 'none',
                                        background: 'var(--black100)',
                                        height: '48px',
                                        width: '146px',
                                        padding: '0px 18.24px',
                                        color: 'var(--white100)',
                                        fontSize: 'var(--fontSizes-1)',
                                        gap: 'var(--space-1)'
                                    }}>
                                    <AddIcon height={'20px'} width={'20px'} fill={'var(--white100)'}/>
                                    <span>Подписаться</span>
                                </Button>
                            </div>
                            <div className={modalStyle.modalItem}>
                                <div className={modalStyle.modalItemProfile}>
                                    <Link to={'/player/Jassix'}>
                                        <Avatar username={'Jassix'} styles={{width: 40, height: 40}}/>
                                    </Link>
                                    <div className={modalStyle.modalItemUser}>
                                        <Link className={modalStyle.modalUsername} to={'/player/Jassix'}>
                                            Jassix
                                        </Link>
                                        <span className={modalStyle.modalUserFollowers}>12.5к подписчиков</span>
                                    </div>
                                </div>
                                <Button
                                    styles={{
                                        border: 'none',
                                        background: 'rgba(0, 0, 0, 0.05) none repeat scroll 0% 0%',
                                        height: '48px',
                                        width: '146px',
                                        padding: '0px 18.24px',
                                        color: 'var(--black100)',
                                        fontSize: 'var(--fontSizes-1)',
                                        gap: 'var(--space-2)'
                                    }}>
                                    <span>Подписка</span>
                                </Button>
                            </div>
                        </div>
                    </Modal.Content>
                </Modal.Wrapper>
            </Modal.BackDrop>
        );
    };

    export const Head = () => {
        const {username} = useParams();
        const {isLoading} = useTypedSelector((state) => state.auth);

        const {user} = useTypedSelector((state) => state.auth);

        const providedUser: any = useState(userState);
        const [popover, setPopover]: any = React.useState([]);
        const [copy, setCopy] = React.useState('Копировать');

        const [modal, setModal] = React.useState(false);
        const [typeModal, setTypeModal] = React.useState('');

        const openModal = (type: string) => {
            setModal(true);
            setTypeModal(type);
        };

        const openInNewTab = (url: string | URL | undefined) => {
            window.open(url, 'Data', 'height=550,width=550');
        };

        const copyURL = () => {
            navigator.clipboard.writeText(String(window.location));
            setCopy('Скопировано');

            setTimeout(() => {
                const arr: Array<any> = [];

                popover.map((item: any) => {
                    arr.push({index: item.index, value: false});
                });

                setPopover(arr);
                setCopy('Копировать');
            }, 500);
        };

        return (
            <>
                <FanModal state={{value: modal, setHandler: setModal}} handlers={[]} type={typeModal}/>

                <div className={style.head}>
                    <div className={style.cover}>
                        <div className={style.coverImageButtonWrapper}>
                            <div className={style.imageButton}>
                                <div className={style.buttonWrapper}>
                                    {user.name == username ? (
                                        <Button
                                            styles={{backgroundColor: 'var(--black100)', color: 'var(--white100)'}}>
                                            Изменить обложку
                                        </Button>
                                    ) : null}
                                </div>
                                <div className={style.imageWrapper}>
                                    <img
                                        src={`https://api.dangerzone.su/user/banner/${username}?t=${Date.now()}`}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={style.coverAvatar}>
                            <Avatar
                                username={username}
                                widthPremium={'30px'}
                                heightPremium={'30px'}
                                styles={{margin: '-5px'}}
                            />
                        </div>
                    </div>
                    <div className={style.info}>
                        <div className={style.userNameButtons}>
                            <div className={style.headInfo}>
                                <div className={style.userName}>
                                    <h1>{username}</h1>
                                </div>
                                <div className={style.status}>
                                    <span>Сегодня я скушал несколько апельсинов</span>
                                </div>
                            </div>
                            <div className={style.buttons}>
                                {user.name === username ? (
                                    <Link to={RoutesEnum.SETTINGS_PAGE} style={{textDecoration: 'none'}}>
                                        <Button
                                            styles={{
                                                border: 'none',
                                                background: 'rgba(0, 0, 0, 0.05) none repeat scroll 0 0',
                                                height: '48px',
                                                padding: '0px 18.24px',
                                                fontSize: 'var(--fontSizes-1)'
                                            }}>
                                            Редактировать профиль
                                        </Button>
                                    </Link>
                                ) : (
                                    <Button
                                        styles={{
                                            border: 'none',
                                            background: 'var(--black100)',
                                            height: '48px',
                                            padding: '0px 18.24px',
                                            color: 'var(--white100)',
                                            fontSize: 'var(--fontSizes-1)',
                                            gap: 'var(--space-2)'
                                        }}>
                                        <AddIcon fill={'var(--white100)'}/>
                                        <span>Подписаться</span>
                                    </Button>
                                )}
                                <Popover
                                    state={{value: popover, setState: setPopover}}
                                    anchor={
                                        <Button
                                            styles={{
                                                border: 'none',
                                                background: 'rgba(0, 0, 0, 0.05) none repeat scroll 0 0',
                                                height: '48px',
                                                padding: '0px 12px',
                                                fontSize: 'var(--fontSizes-1)'
                                            }}>
                                            <ShareIcon width={'24px'} height={'24px'}/>
                                        </Button>
                                    }>
                                    <PopoverWrapper styles={{gap: 'var(--space-3)'}}>
                                        <div style={{fontWeight: 'var(--fontWeights-semibold)', fontSize: 18}}>
                                            Поделитесь ссылкой на профиль
                                        </div>
                                        <div style={{display: 'flex', flexDirection: 'row', gap: 'var(--space-6)'}}>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: 'var(--space-2)'
                                                }}>
                                                <Button
                                                    onClick={() =>
                                                        openInNewTab(
                                                            `https://vk.com/share.php?url=https://dangerzone.su/player/${username}`
                                                        )
                                                    }
                                                    styles={{
                                                        border: '1px solid var(--black10)',
                                                        height: '48px',
                                                        padding: '0px 12px',
                                                        fontSize: 'var(--fontSizes-1)'
                                                    }}>
                                                    <VkIcon width={'22px'} height={'22px'}/>
                                                </Button>
                                                <span
                                                    style={{
                                                        fontSize: 11,
                                                        color: 'var(--black70)',
                                                        fontWeight: 'var(--fontWeights-medium)'
                                                    }}>
                          ВКонтакте
                        </span>
                                            </div>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: 'var(--space-2)'
                                                }}>
                                                <Button
                                                    onClick={() =>
                                                        openInNewTab(
                                                            `https://telegram.me/share/?url=https://dangerzone.su/player/${username}&title=${username}'s profile`
                                                        )
                                                    }
                                                    styles={{
                                                        border: '1px solid var(--black10)',
                                                        height: '48px',
                                                        padding: '0px 12px',
                                                        fontSize: 'var(--fontSizes-1)'
                                                    }}>
                                                    <TelegramIcon width={'22px'} height={'22px'}/>
                                                </Button>
                                                <span
                                                    style={{
                                                        fontSize: 11,
                                                        color: 'var(--black70)',
                                                        fontWeight: 'var(--fontWeights-medium)'
                                                    }}>
                          Telegram
                        </span>
                                            </div>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: 'var(--space-2)'
                                                }}>
                                                <Button
                                                    styles={{
                                                        border: '1px solid var(--black10)',
                                                        height: '48px',
                                                        padding: '0px 12px',
                                                        fontSize: 'var(--fontSizes-1)'
                                                    }}>
                                                    <DiscordIcon width={'22px'} height={'22px'}/>
                                                </Button>
                                                <span
                                                    style={{
                                                        fontSize: 11,
                                                        color: 'var(--black70)',
                                                        fontWeight: 'var(--fontWeights-medium)'
                                                    }}>
                          Discord
                        </span>
                                            </div>
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: 'var(--space-2)'
                                                }}>
                                                <Button
                                                    styles={{
                                                        border: '1px solid var(--black10)',
                                                        height: '48px',
                                                        padding: '0px 12px',
                                                        fontSize: 'var(--fontSizes-1)'
                                                    }}
                                                    onClick={copyURL}>
                                                    <ShareIcon width={'22px'} height={'22px'}/>
                                                </Button>
                                                <span
                                                    style={{
                                                        fontSize: 11,
                                                        color: 'var(--black70)',
                                                        fontWeight: 'var(--fontWeights-medium)'
                                                    }}>
                          {copy}
                        </span>
                                            </div>
                                        </div>
                                    </PopoverWrapper>
                                </Popover>
                                <Popover
                                    state={{value: popover, setState: setPopover}}
                                    anchor={
                                        <Button
                                            styles={{
                                                border: 'none',
                                                background: 'rgba(0, 0, 0, 0.05) none repeat scroll 0 0',
                                                height: '48px',
                                                padding: '0px 12px',
                                                fontSize: 'var(--fontSizes-1)'
                                            }}>
                                            <DotsIcon width={'24px'} height={'24px'}/>
                                        </Button>
                                    }>
                                    <PopoverWrapper styles={{padding: '8px'}}>
                                        <Button styles={{border: 'none', minHeight: '35px', borderRadius: '8px'}}>
                                            Пожаловаться на игрока
                                        </Button>
                                    </PopoverWrapper>
                                </Popover>
                            </div>
                        </div>
                        <div className={style.followFollowersWrapper}>
                            <div className={style.followFollowers}>
                                <div className={style.items}>
                                    <div className={style.item} onClick={() => openModal('followers')}>
                                        <span className={style.title}>Подписчиков</span>
                                        <button className={style.count}>0</button>
                                    </div>
                                    <div className={style.item} onClick={() => openModal('follows')}>
                                        <span className={style.title}>Подписок</span>
                                        <button className={style.count}>1</button>
                                    </div>
                                    <div className={style.item}>
                                        <span className={style.title}>Общий рейтинг</span>
                                        <div className={style.status}>
                      <span className={style.title}>
                        {providedUser.rating.bedwars.global.total.get()}
                      </span>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className={style.item}>
                                        <span className={style.title}>Статус</span>
                                        <div className={style.status}>
                                            <div style={{backgroundColor: 'var(--red)'}} className={style.circle}></div>
                                            <span className={style.title}>Оффлайн</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    const TableItem: FC<{
        head: Array<string>;
        body: Array<{
            date: { day: string; time: string };
            type: string;
            win: boolean;
            map: string;
            image: string;
        }>;
    }> = ({head, body}) => {
        return (
            <table className={style.statistic}>
                <thead>
                {head.map((item, key) => (
                    <th key={key} style={{width: `calc(100% / ${head.length})`}}>
                        {item}
                    </th>
                ))}
                </thead>
                <tbody>
                {body.map((item, key: number) => (
                    <tr key={key}>
                        <td>
                            <div className={style.date}>
                                <span>{item.date.day}</span>
                                <span>{item.date.time}</span>
                            </div>
                        </td>
                        <td>{item.type}</td>
                        <td>
                <span
                    style={{
                        color: item.win ? 'var(--green)' : 'var(--red)'
                    }}>
                  {item.win ? 'Победа' : 'Поражение'}
                </span>
                        </td>
                        <td>
                            <div className={style.map}>
                                <img src={item.image} alt=""/>
                                {item.map}
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    };

    const GameItem: FC<{
        type: string;
        rating: number;
        place: number;
        winRate: number;
        matches: number;
        latestMatches: Array<{ win: boolean }>;
    }> = ({type, latestMatches, matches, winRate, rating, place}) => {
        return (
            <div className={style.matchCard}>
                <div
                    className={style.matchCardImg}
                    style={{
                        backgroundImage:
                            type === '4v4' ? `url(${BW4v4})` : type === `2v2` ? `url(${BW2v2})` : `url(${BW6v6})`
                    }}>
                    <h1 className={style.matchCardImgTitle}>{type}</h1>
                </div>
                <div className={style.matchCardInfo}>
                    <div className={style.matchCardInfoColumn}>
                        <span className={style.matchCardInfoColumnTitle}>{matches}</span>
                        <span className={style.matchCardInfoColumnDescription}>Матчи</span>
                    </div>
                    <div className={style.matchCardInfoColumn}>
                        <span className={style.matchCardInfoColumnTitle}>{rating}</span>
                        <span className={style.matchCardInfoColumnDescription}>Рейтинг</span>
                    </div>
                    <div className={style.matchCardInfoColumn}>
                        <span className={style.matchCardInfoColumnTitle}>{place}</span>
                        <span className={style.matchCardInfoColumnDescription}>Место</span>
                    </div>
                    <div className={style.matchCardInfoColumn}>
                        <span className={style.matchCardInfoColumnTitle}>{winRate}%</span>
                        <span className={style.matchCardInfoColumnDescription}>Побед</span>
                    </div>
                    <div style={{gridColumn: '1 / 5'}} className={style.matchCardInfoColumn}>
                        <div className={style.matchCardInfoColumnTitle}>
                            {latestMatches.map((item, key) => (
                                <span key={key} style={{color: item.win ? 'var(--green)' : 'var(--red)'}}>
                  {item.win ? 'W' : 'L'}
                </span>
                            ))}
                        </div>
                        <span className={style.matchCardInfoColumnDescription}>Последние матчи</span>
                    </div>
                </div>
            </div>
        );
    };

    export const Body = () => {
        const ref: any = useRef(null);
        const state = useState(globalState);

        const selectTab = (id: number) => {
            state.tab.set(id);
        };

        const maps = [
            {
                date: {day: '26 авг.', time: '(23:03)'},
                type: '4v4',
                win: true,
                map: 'Фортис',
                image: 'https://i.imgur.com/rWVJi6C.png'
            },
            {
                date: {day: '26 авг.', time: '(23:03)'},
                type: '4v4',
                win: false,
                map: 'Зимперия',
                image: 'https://i.imgur.com/kTafZFs.png'
            },
            {
                date: {day: '26 авг.', time: '(23:03)'},
                type: '4v4',
                win: true,
                map: 'Замки',
                image: 'https://i.imgur.com/kx3jh90.png'
            },
            {
                date: {day: '26 авг.', time: '(23:03)'},
                type: '4v4',
                win: false,
                map: 'Критаз',
                image: 'https://i.imgur.com/g7OF3AH.png'
            },
            {
                date: {day: '26 авг.', time: '(23:03)'},
                type: '4v4',
                win: true,
                map: 'Алоз',
                image: 'https://i.imgur.com/LPop0cH.png'
            }
        ];

        return (
            <>
                <div className={style.body}>
                    <Tabs style={{gap: 'var(--space-6)', display: 'flex', flexDirection: 'column'}}>
                        <TabList style={{margin: 0, padding: 0}}>
                            <div className={style.tabs}>
                                <div
                                    className={style.border}
                                    style={{
                                        transform:
                                            state.tab.get() === 1
                                                ? 'translateX(0px)'
                                                : state.tab.get() === 2
                                                    ? 'translateX(110px)'
                                                    : `translateX(180px)`,
                                        width: state.sizes.get()
                                    }}></div>
                                <Tab>
                                    <button
                                        onClick={() => selectTab(1)}
                                        ref={state.tab.get() === 1 ? ref : null}
                                        style={{color: state.tab.get() === 1 ? 'var(--black100)' : 'var(--black60)'}}
                                        className={style.tab}>
                                        Статистика
                                    </button>
                                </Tab>
                                <Tab>
                                    <button
                                        onClick={() => selectTab(2)}
                                        ref={state.tab.get() === 2 ? ref : null}
                                        style={{color: state.tab.get() === 2 ? 'var(--black100)' : 'var(--black60)'}}
                                        className={style.tab}>
                                        Матчи
                                    </button>
                                </Tab>
                                <Tab>
                                    <button
                                        onClick={() => selectTab(3)}
                                        ref={state.tab.get() === 3 ? ref : null}
                                        style={{color: state.tab.get() === 3 ? 'var(--black100)' : 'var(--black60)'}}
                                        className={style.tab}>
                                        <span>Посты</span>
                                        <div className={style.counter}>12</div>
                                    </button>
                                </Tab>
                            </div>
                        </TabList>
                        <div className={style.tabFilters}>
                            <Button styles={{gap: 'var(--space-2)', paddingRight: '11.2px'}}>
                                <span className={style.tabFilterHiddenTitle}>Время</span>
                                <span>Сезон</span>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    width="24"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="sc-bdvvtL sc-iCfMLu gBfQOf sc-cCcXHH dywJep">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M7.46967 9.46967C7.76256 9.17678 8.23744 9.17678 8.53033 9.46967L12 12.9393L15.4697 9.46967C15.7626 9.17678 16.2374 9.17678 16.5303 9.46967C16.8232 9.76256 16.8232 10.2374 16.5303 10.5303L12.5303 14.5303C12.2374 14.8232 11.7626 14.8232 11.4697 14.5303L7.46967 10.5303C7.17678 10.2374 7.17678 9.76256 7.46967 9.46967Z"
                                        fill="currentColor"></path>
                                </svg>
                            </Button>
                        </div>
                        <div className={style.tabBody}>
                            <TabPanel>
                                <div className={style.match}>
                                    <GameItem
                                        type={'2v2'}
                                        rating={1070}
                                        place={1}
                                        winRate={66}
                                        matches={3}
                                        latestMatches={[{win: true}, {win: true}, {win: false}]}
                                    />

                                    <GameItem
                                        type={'4v4'}
                                        rating={1070}
                                        place={1}
                                        winRate={66}
                                        matches={3}
                                        latestMatches={[{win: true}, {win: true}, {win: false}]}
                                    />

                                    <GameItem
                                        type={'6v6'}
                                        rating={1070}
                                        place={1}
                                        winRate={66}
                                        matches={3}
                                        latestMatches={[{win: true}, {win: true}, {win: false}]}
                                    />
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <TableItem head={['Дата', 'Режим', 'Результат', 'Карта']} body={maps}/>
                            </TabPanel>

                            <TabPanel>sadda</TabPanel>
                        </div>
                    </Tabs>
                </div>
            </>
        );
    };
}
