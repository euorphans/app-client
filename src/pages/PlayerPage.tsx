import React, { FC, useLayoutEffect } from 'react';
import { Player } from '../components/namespaces/player/Player';
import { Preloader } from '../components/preLoader/Preloader';
import UserService from '../services/UserService';
import { useParams } from 'react-router-dom';
import { useLayout } from '../hooks/useLayout';

export const PlayerPage: FC = () => {
  const [user, setUser]: any = React.useState([]);
  const { state: layout } = useLayout();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    layout.footer.topPeace.set(true);
    layout.footer.state.set(true);
  }, []);

  const { username } = useParams();

  return (
    <div style={{ minHeight: 'calc(100vh - 333px)' }}>
      <Preloader
        query={UserService.getUserRating(username)}
        state={{ value: user, setState: setUser }}>
        <Player.Initialization user={user}>
          <Player.Head />
          <Player.Body />
        </Player.Initialization>
      </Preloader>
    </div>
  );
};
