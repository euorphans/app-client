import React, { FC, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import disableScroll from 'disable-scroll';

import { Button } from '../ui/button/Button';
import { CloseIcon } from '../icons/Icons';
import style from './Modal.module.scss';
import { modalAnimation, opacityAnimation } from '../../utils/Animations';

interface ModalI {
  width?: number;
  height?: number;
  scroll?: string;
  children?: React.ReactNode;
  state?: boolean;
  setState?: any;
}

export namespace Modal {
  export const BackDrop: FC<ModalI> = ({ children, state, setState }) => {
    const escFunction = useCallback((event: any) => {
      if (event.key === 'Escape') {
        setState(false);
      }
    }, []);

    useLayoutEffect(() => {
      if (state) {
        disableScroll.on();
        document.body.style.overflow = 'hidden';
        document.body.style.height = '100%';
      } else {
        disableScroll.off();
        document.body.style.overflow = 'visible';
      }
    }, [state]);

    useEffect(() => {
      document.addEventListener('keydown', escFunction, false);

      return () => {
        document.removeEventListener('keydown', escFunction, false);
      };
    }, []);

    return (
      <AnimatePresence>
        {state && (
          <motion.div
            variants={opacityAnimation}
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}
            className={style.backdrop}>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  export const Wrapper: FC<ModalI> = ({ children, setState }) => {
    return (
      <div className={style.wrapper}>
        <div className={style.buttonWrapper}>
          <Button
            onClick={() => setState(false)}
            styles={{
              color: 'var(--white100)',
              borderColor: 'var(--white08)',
              height: '40px',
              width: '40px',
              padding: '0'
            }}>
            <CloseIcon width={'22px'} height={'22px'} />
          </Button>
        </div>
        {children}
      </div>
    );
  };

  export const Content: FC<ModalI> = ({ width, height, setState, children }) => {
    return (
      <>
        <div className={style.spaceArea} onClick={() => setState(false)}></div>

        <motion.div
          variants={modalAnimation}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
          className={style.modal}
          style={{ height: height, width: width }}>
          {children}
        </motion.div>
      </>
    );
  };
}
