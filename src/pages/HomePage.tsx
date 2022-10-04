import React, { FC, useLayoutEffect } from 'react';
import { Home } from '../components/namespaces/home/Home';
import { useLayout } from '../hooks/useLayout';
import { RainbowText } from '../components/rainbowText/RainbowText';
import { Button } from '../components/ui/button/Button';
import { useNavigate } from 'react-router-dom';
import Input from '../components/ui/input/Input';
import { SearchIcon } from '../components/icons/Icons';
import style from '../components/namespaces/home/Home.module.scss';

export const HomePage: FC = () => {
  const { state: layout } = useLayout();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    layout.footer.topPeace.set(true);
    layout.footer.state.set(true);
  }, []);

  return (
    <div style={{ minHeight: 'calc(100vh - 333px)' }}>
      <Home.Heading>
        <Home.HeadingTitle>
          <RainbowText blur={false}>Киберспортивная</RainbowText> платформа,
          <br />
          выходящая за рамки всего возможного
        </Home.HeadingTitle>
        <Input
          icon={{ position: 'left', item: <SearchIcon height={'24px'} width={'24px'} /> }}
          placeholder={'Поиск по сайту..'}
          className={style.hiddenInput}
          styles={{ padding: '0px 14px', height: '50px', width: '470px' }}
          options={{ useFocus: true }}
        />
        <Home.HeadingTabs>
          <Button onClick={() => navigate('/subscription')} styles={{ height: '46px' }}>
            Купить подписку
          </Button>
        </Home.HeadingTabs>
      </Home.Heading>

      <Home.ArticlesWrapper>
        <Home.ArticleHeading>Последние статьи</Home.ArticleHeading>
        <Home.Articles>
          <Home.ArticleItem
            image={'https://i.imgur.com/kuULB0U.png'}
            title={'Увы, но по техническим причинам нам требуется перенести дату открытия сайта'}
            date={'28 Августа, 2022'}
            url={'vk.com'}
          />
          <Home.ArticleItem
            image={'https://i.imgur.com/kuULB0U.png'}
            title={'Увы, но по техническим причинам нам требуется перенести дату открытия сайта'}
            date={'28 Августа, 2022'}
            url={'vk.com'}
          />
          <Home.ArticleItem
            image={'https://i.imgur.com/kuULB0U.png'}
            title={'Увы, но по техническим причинам нам требуется перенести дату открытия сайта'}
            date={'28 Августа, 2022'}
            url={'vk.com'}
          />
          <Home.ArticleItem
            image={'https://i.imgur.com/kuULB0U.png'}
            title={'Увы, но по техническим причинам нам требуется перенести дату открытия сайта'}
            date={'28 Августа, 2022'}
            url={'vk.com'}
          />
        </Home.Articles>
      </Home.ArticlesWrapper>
    </div>
  );
};
