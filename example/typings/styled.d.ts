import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      [b in
        | 'mobile'
        | 'tablet'
        | 'desktop'
        | 'xs'
        | 'sm'
        | 'md'
        | 'lg'
        | 'xl']: number
    };
  }
}
