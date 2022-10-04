import React, { FC, useLayoutEffect } from 'react';
import { useLayout } from '../hooks/useLayout';
import { BrandBook } from '../components/namespaces/brandbook/BrandBook';
// @ts-ignore
import animatedLogo from '../static/images/animatedLogo.gif';
import style from './../components/namespaces/brandbook/BrandBook.module.scss';
import { Button } from '../components/ui/button/Button';
import { ArrowIcon, ShareIcon } from '../components/icons/Icons';

export const BrandBookPage: FC = () => {
  const { state: layout } = useLayout();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    layout.footer.topPeace.set(true);
    layout.footer.state.set(true);
  }, []);

  return (
    <div style={{ minHeight: 'calc(100vh - 333px)' }}>
      <BrandBook.Heading>
        <BrandBook.HeadingColumn>
          <BrandBook.HeadingWrapper>
            <BrandBook.HeadingTitle>Как использовать брендинг Danger Zone</BrandBook.HeadingTitle>
            <BrandBook.HeadingDescription>
              Вы сотрудничаете с DangerZone, работаете в DangerZone или создаете производное
              искусство? В этом кратком руководстве показано, что вы можете и чего не можете делать
              с элементами брендинга DangerZone.
            </BrandBook.HeadingDescription>
          </BrandBook.HeadingWrapper>
          <Button
            styles={{
              height: '48px',
              backgroundColor: 'var(--black100)',
              border: 'none',
              color: 'var(--white100)',
              paddingLeft: '40px',
              paddingRight: '40px',
              display: 'flex',
              flexDirection: 'row',
              gap: 'var(--space-2)'
            }}>
            <ArrowIcon /> Скачать архив брендбука
          </Button>
        </BrandBook.HeadingColumn>
        <BrandBook.HeadingColumn>
          <img
            src={animatedLogo}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '100%',
              userSelect: 'none'
            }}
            alt=""
          />
        </BrandBook.HeadingColumn>
      </BrandBook.Heading>
    </div>
  );
};
