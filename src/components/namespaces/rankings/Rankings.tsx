import React, { FC, useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import style from './Rankings.module.scss';
import { arrowAnimation } from '../../../utils/Animations';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '../../ui/avatar/Avatar';
import { ArrowIcon } from '../../icons/Icons';
import { ComponentInterface } from '../../../types';

interface RankingsTable {
  category: Array<string>;
  items: any;
}

export namespace Rankings {
  export const Wrapper: FC<ComponentInterface> = ({ children }) => {
    return <>{children}</>;
  };

  export const Head = () => {
    return (
      <div className={style.head}>
        <div className={style.title}>Рейтинг игроков</div>
      </div>
    );
  };

  const TableItem: FC<{
    username: string;
    rating: number;
    id: number;
    query?: boolean;
  }> = ({ username, rating, id, query }) => {
    const [isHover, setIsHover] = useState(false);
    const navigate = useNavigate();

    return (
      <motion.tr
        className={style.rankingsItem}
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
        onClick={() => navigate(`/player/${username}`)}>
        <th>{id}</th>
        <th>
          <div className={style.rankingsItemUser}>
            <Avatar username={username} styles={{ width: 48, height: 48 }} />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                alignItems: 'flex-start',
                justifyContent: 'center'
              }}>
              {username}
            </div>
          </div>
        </th>
        <motion.th>
          <div
            style={{
              display: 'flex',
              gap: 'var(--space-2)',
              height: '50px',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
            {rating}

            <div style={{ marginRight: 25 }}>
              <AnimatePresence>
                {isHover && query ? (
                  <motion.div
                    variants={arrowAnimation}
                    initial={'initial'}
                    animate={'animate'}
                    exit={'exit'}>
                    <ArrowIcon height={24} width={24} />
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </div>
        </motion.th>
      </motion.tr>
    );
  };

  const Table: FC<RankingsTable> = ({ category, items }) => {
    const mediaMatch = window.matchMedia('(min-width: 820px)');
    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
      const handler = (e: any) => setMatches(e.matches);
      mediaMatch.addListener(handler);
      return () => mediaMatch.removeListener(handler);
    });

    return (
      <table className={style.rankingsTable}>
        <thead className={style.rankingsTableHead}>
          {category.map((item, key) =>
            item === 'Статус' && !matches ? null : <th key={key}>{item}</th>
          )}
        </thead>

        <tbody>
          <TableItem username={'Jassix'} rating={2000} id={1} query={matches} />
          <TableItem username={'wassty'} rating={1000} id={2} query={matches} />
          <TableItem username={'Orphans'} rating={1000} id={3} query={matches} />
        </tbody>
      </table>
    );
  };

  export const Body = () => {
    return (
      <>
        <div className={style.rankingsTableWrapper}>
          <Table category={['#', 'Никнейм', 'Рейтинг']} items={'any'} />
        </div>
      </>
    );
  };
}
