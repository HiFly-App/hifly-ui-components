import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 1024,
} as const;

export type Breakpoint = keyof typeof breakpoints;

type BreakpointsState = {
  [key in Breakpoint]: boolean;
};

export const useBreakpoints = (): BreakpointsState => {
  const [width, setWidth] = useState(Dimensions.get('window').width);

  useEffect(() => {
    const updateWidth = () => setWidth(Dimensions.get('window').width);
    const subscription = Dimensions.addEventListener('change', updateWidth);

    return () => subscription.remove();
  }, []);

  return {
    xs: width >= breakpoints.xs && width < breakpoints.sm,
    sm: width >= breakpoints.sm && width < breakpoints.md,
    md: width >= breakpoints.md && width < breakpoints.lg,
    lg: width >= breakpoints.lg,
  };
};
