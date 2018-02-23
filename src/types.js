export type BreakpointValues<T> = T | { [name: string]: T };

export type Wrap = boolean;
export type Reverse = boolean;
export type HAlign = 'left' | 'right' | 'center' | 'justify-center' | 'justify';
export type VAlign = 'top' | 'bottom' | 'center' | 'stretch';

export type Size = 'min' | 'max' | number;
export type Visible = boolean;
