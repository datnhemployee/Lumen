import {
  createContext,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {StatusBar as RnStatusBar, StatusBarProps} from 'react-native';

const StatusBarContext = createContext({
  statusBarRef: {current: null},
});

const forwardSetStatusBarStyle = (StatusBarComp: typeof RnStatusBar) =>
  forwardRef((props, ref) => {
    const [barStyle, setBarStyle] =
      useState<StatusBarProps['barStyle']>('default');

    useImperativeHandle(ref, () => ({setBarStyle}), []);

    return <StatusBarComp {...props} barStyle={barStyle} />;
  });

const StatusBar = forwardSetStatusBarStyle(RnStatusBar);

const withStatusBar = (Comp: React.ElementType) => (props: any) => {
  const statusBarRef = useRef(null);

  return (
    <StatusBarContext.Provider value={{statusBarRef}}>
      <StatusBar />
      <Comp {...props}>{props.children}</Comp>
    </StatusBarContext.Provider>
  );
};

export {StatusBarContext, withStatusBar};
