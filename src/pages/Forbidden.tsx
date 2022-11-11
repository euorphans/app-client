import React, { useLayoutEffect } from 'react';
import { NotFound } from '../components/namespaces/notFound/NotFound';
import toast from 'react-hot-toast';
import { errorToast } from '../utils/Theme';
import { useLayout } from '../hooks/useLayout';

export const Forbidden = () => {
  const [state, setState] = React.useState(false);
  const { state: layout } = useLayout();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    layout.footer.topPeace.set(false);
    layout.footer.state.set(true);
  }, []);

  if (!state) {
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
          Вы будете перенаправлены на главную через 5 секунд
        </span>
      </div>,
      errorToast
    );
    setState(true);
    setTimeout(() => {
      window.location.replace('/');
    }, 5000);
  }
  return (
    <div style={{ minHeight: 'calc(100vh - 321px)' }}>
      <NotFound.Body
        title={'403'}
        description={'У Вас недостаточно прав для доступа к данной странице'}
      />
    </div>
  );
};
