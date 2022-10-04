import React, { FC } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { routes } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Forbidden } from '../pages/Forbidden';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const RootRouter: FC = () => {
  const { isAuth, isUserLoading } = useTypedSelector((state) => state.auth);
  const { roles, perms } = useTypedSelector((state) => state.perms);
  const location = useLocation();

  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="pageTransition" timeout={300}>
        <Routes>
          {routes.map((item, key) =>
            item.privacy.authRequire ? (
              isAuth ? (
                item.privacy.perms === null ? (
                  <Route key={key} path={item.path} element={item.element} />
                ) : perms.includes(item.privacy.perms) ? (
                  <Route key={key} path={item.path} element={item.element} />
                ) : (
                  <Route key={key} path={item.path} element={<Forbidden />} />
                )
              ) : (
                <Route key={key} path={item.path} element={<Forbidden />} />
              )
            ) : (
              <Route key={key} path={item.path} element={item.element} />
            )
          )}
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};
