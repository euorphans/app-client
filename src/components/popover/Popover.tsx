import style from './Popover.module.scss';
import React, { FC, useEffect, useRef } from 'react';

interface Popover {
  state: {
    value: Array<{ index: string; value: boolean }>;
    setState: React.Dispatch<React.SetStateAction<any>>;
  };

  anchor: React.CElement<any, any>;
  children: React.ReactNode;
  ref?: any;
}

export const Popover: FC<Popover> = ({ state, ref, anchor, children }) => {
  const contentRef: any = useRef(0);
  const wrapperRef: any = useRef(0);
  const [height, setHeight] = React.useState({ wrapper: 0, content: 0 });
  const [indexState, setIndexState]: any = React.useState(null);
  const candidate = state.value.find((obj) => obj.index === wrapperRef.current.textContent);

  useEffect(() => {
    if (contentRef.current && wrapperRef.current) {
      setHeight({
        wrapper: wrapperRef.current.offsetHeight,
        content: contentRef.current.offsetHeight
      });
    }

    if (!candidate) {
      state.setState((prevState: any) => [
        ...prevState,
        { index: wrapperRef.current.textContent, value: false }
      ]);
    }
  }, []);

  const openPopover = () => {
    if (candidate) {
      const currentArray = state.value;
      const index = currentArray.indexOf(candidate);
      setIndexState(index);

      state.value.map((item, key) => {
        key === index
          ? (currentArray[key].value = !currentArray[key].value)
          : (currentArray[key].value = false);
      });

      state.setState([...currentArray]);
    }
  };

  return (
    <>
      <div className={style.popoverWrapper} ref={wrapperRef}>
        <div onClick={openPopover} ref={ref}>
          {anchor}
        </div>

        <div
          ref={contentRef}
          style={{
            transform: `translateY(60px)`,
            position: 'absolute',
            zIndex: 100,
            display:
              indexState !== null ? (state.value[indexState].value ? 'flex' : 'none') : 'none'
          }}>
          {children}
        </div>
      </div>
    </>
  );
};

export const PopoverWrapper: FC<{ children: React.ReactNode; styles?: any }> = ({
  children,
  styles
}) => {
  return (
    <div className={style.popoverContent} style={{ ...styles }}>
      {children}
    </div>
  );
};
