# styled-components-grid

![npm](https://img.shields.io/npm/v/styled-components-grid.svg) ![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/styled-components-grid.svg) ![npm](https://img.shields.io/npm/dm/styled-components-grid.svg) [![Build Status]![GithubActions](https://github.com/jameslnewell/styled-components-grid/workflows/main/badge.svg)](https://github.com/jameslnewell/styled-components-grid/actions)

Responsive grid components for `styled-components` 💅.

> 🕸 [Website](https://jameslnewell.github.io/styled-components-grid/)

> 📘 [Change log](https://github.com/jameslnewell/styled-components-grid/blob/master/CHANGELOG.md)

> 👀 Have a look at [`styled-components-breakpoint`](https://github.com/jameslnewell/styled-components-breakpoint) and [`styled-components-spacing`](https://github.com/jameslnewell/styled-components-spacing) which work well with this package.

## Installation

NPM:

```
npm install styled-components-grid
```

Yarn:

```bash
yarn add styled-components-grid
```

## Usage

> [Examples](https://jameslnewell.github.io/styled-components-grid/)

### Using the themable mixins

```jsx
import React from 'react';
import styled from 'styled-components';
import {grid} from 'styled-components-grid';

const FeaturePanel = styled`
  ${grid({reverse: true})}
`;

const Feature = styled`
  ${grid.unit({size: {tablet: 1 / 3}})}
`;

<FeaturePanel>
  <Feature>Awesome!</Feature>
  <Feature>Amazing!</Feature>
  <Feature>Out of this world!</Feature>
</FeaturePanel>;
```

### Using the themable component

```jsx
import React from 'react';
import Grid from 'styled-components-grid';

<Grid>
  <Grid.Unit size={1 / 6}>Awesome!</Grid.Unit>
  <Grid.Unit size={1 / 3}>Amazing!</Grid.Unit>
  <Grid.Unit size={{tablet: 1 / 2, desktop: 1 / 4}}>
    Out of this world!
  </Grid.Unit>
</Grid>;
```

### Using custom breakpoints for the themable mixins and components

The themable breakpoints can be customised using `ThemeProvider`. For example, to use the same breakpoints and spacings as [Bootstrap](https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints), you can do so like this:

```jsx
import React from 'react';
import {ThemeProvider} from 'styled-components';

const theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
};

<ThemeProvider theme={theme}>{/* ... */}</ThemeProvider>;
```

If you're using Typescript, you'll also need to define the breakpoints on the theme.

`styled.d.ts`

```tsx
import {DefaultTheme} from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      [name in 'xs' | 'sm' | 'md' | 'lg' | 'xl']: number;
    };
  }
}
```

### Using the mixin factories

If your breakpoints don't need to be themable then you can use the static mixin factories.

```jsx
import styled from 'styled-components';
import {createMap} from 'styled-components-breakpoint';
import {createGrid, createGridUnit} from 'styled-components-grid';

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const map = createMap(breakpoints);
const grid = createGrid(map);
const unit = createGridUnit(map);

const FeaturePanel = styled`
  ${grid({reverse: true})}
`;

const Feature = styled`
  ${unit({size: {tablet: 1 / 3}})}
`;

<FeaturePanel>
  <Feature>Awesome!</Feature>
  <Feature>Amazing!</Feature>
  <Feature>Out of this world!</Feature>
</FeaturePanel>;
```

## API

### Grid mixin/component

Themable mixin for creating grids.

#### Properties:

##### halign

Controls the horizontal alignment of grid units.

A `string` equal to one of `left|right|center|justify|justify-center` OR an `object` where the values are `string`s equal to one of `left|right|center|justify|justify-center` for each desired breakpoint. Defaults to `left`.

##### valign

Controls the vertical alignment of grid units.

A `string` equal to one of `top|bottom|center|stretch` OR an `object` where the values are `string`s equal to one of `top|bottom|center|stretch` for each desired breakpoint. Defaults to `stretch`.

##### reverse

Reverse the order of the grid units.

A `boolean` OR an `object` where the values are `booleans`s for each desired breakpoint. Defaults to `false`.

##### wrap

Whether the grid units should wrap across multiple lines or a single line.

A `boolean` OR an `object` where the values are `booleans`s for each desired breakpoint. Defaults to `true`.

#### as

Render the grid on a more semantic element.

Optional. A `string` or valid React component. Defaults to `div`.

### Grid unit mixin/component

#### Properties:

##### size

Controls the width of the grid unit.

A `number` between `0` and `1` OR a `string` of `min` or `max` OR an `object` where the values are a `number` between `0` and `1` OR a `string` of `min` or `max` for each desired breakpoint.

#### as

Render the grid unit on a more semantic element.

Optional. A `string` or valid React component. Defaults to `div`.
