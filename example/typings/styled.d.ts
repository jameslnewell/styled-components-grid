import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints:
      | {[b in 'xs' | 'sm' | 'md' | 'lg' | 'xl']: number}
      | {[b in 'mobile' | 'tablet' | 'desktop']: number};
  }
}
