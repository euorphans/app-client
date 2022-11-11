import React, { FC, useLayoutEffect, useState } from 'react';
import { Subscription } from '../components/namespaces/subscription/Subscription';
import { useLayout } from '../hooks/useLayout';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
import { motion } from 'framer-motion';
import { slideAnimation } from '../utils/Animations';
import disableScroll from 'disable-scroll';

export const SubscriptionPage: FC = () => {
  const { state: layout } = useLayout();
  const [index, setIndex] = useState<number>(0);
  const colors = ['var(--black100)', 'var(--black100)', 'var(--black100)'];

  document.body.style.overflow = 'hidden';
  disableScroll.on();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    layout.footer.topPeace.set(true);
    layout.footer.state.set(false);
  }, []);

  const prevIndex = () => {
    if (index > 0) {
      setIndex(() => index - 1);
    }
  };

  const nextIndex = () => {
    if (index <= 5) {
      setIndex(() => index + 1);
    }
  };

  return (
    <ReactScrollWheelHandler
      upHandler={prevIndex}
      downHandler={nextIndex}
      style={{
        width: '100%',
        borderRadius: 'var(--radii-3)',
        height: 'calc(100vh - 112px)',
        backgroundColor: colors[index],
        transition: 'var(--transition15)'
      }}>
      <Subscription.Wrapper>
        <motion.div variants={slideAnimation} initial={'initial'} whileInView={'whileInView'}>
          {index == 0 ? <Subscription.Intro /> : false}
        </motion.div>
        <motion.div variants={slideAnimation} initial={'initial'} whileInView={'whileInView'}>
          {index == 1 ? <Subscription.ExclusiveIcon /> : false}
        </motion.div>
      </Subscription.Wrapper>
    </ReactScrollWheelHandler>
  );
};
