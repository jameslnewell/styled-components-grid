# styled-components-grid

![npm](https://img.shields.io/npm/v/styled-components-grid.svg) ![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/styled-components-grid.svg) ![npm](https://img.shields.io/npm/dm/styled-components-grid.svg) [![Build Status](https://travis-ci.org/jameslnewell/styled-components-grid.svg?branch=master)](https://travis-ci.org/jameslnewell/styled-components-grid)

Responsive grid components for `styled-components` 💅.

> [Change log](https://github.com/jameslnewell/styled-components-grid/blob/master/CHANGELOG.md)

> Have a look 👀 at [`styled-components-breakpoint`](https://github.com/jameslnewell/styled-components-breakpoint) and [`styled-components-spacing`](https://github.com/jameslnewell/styled-components-spacing) which work well with this package.

## Installation

```bash
yarn add styled-components styled-components-grid
```

## Usage

> [Examples](https://jameslnewell.github.io/styled-components-grid/)

### Using the default breakpoints

```js
import React from 'react';
import Grid from 'styled-components-grid';

<Grid>
  <Grid.Unit size={1 / 6}>Awesome!</Grid.Unit>
  <Grid.Unit size={1 / 3}>Amazing!</Grid.Unit>
  <Grid.Unit size={{ tablet: 1 / 2, desktop: 1 / 4 }}>Out of this world!</Grid.Unit>
</Grid>;
```

### Using custom breakpoints

You can customise the default breakpoints. If you would like to use the same breakpoints as [Bootstrap](https://v4-alpha.getbootstrap.com/layout/overview/#responsive-breakpoints), you can do so like this:

```js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Grid from 'styled-components-grid';

const theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  }
};

<ThemeProvider theme={theme}>
  <Grid>
    <Grid.Unit size={1 / 6}>Awesome!</Grid.Unit>
    <Grid.Unit size={1 / 3}>Amazing!</Grid.Unit>
    <Grid.Unit size={{ lg: 1 / 5 }}>Out of this world!</Grid.Unit>
  </Grid>
</ThemeProvider>;
```

### Using the mixins

```js
import React from 'react';
import styled from 'styled-components';
import { grid } from 'styled-components-grid';

const FeaturePanel = styled`
  ${grid({})}
`;

const Feature = styled`
  ${grid.unit({ size: { tablet: 1 / 3 } })}
`;

<FeaturePanel>
  <Feature>Awesome!</Feature>
  <Feature>Amazing!</Feature>
  <Feature>Out of this world!</Feature>
</FeaturePanel>;
```

## Components

### &lt;Grid/&gt;

#### horizontalAlign

Controls the horizontal alignment of grid units.

A `string` equal to one of `left|right|center|justify|justify-center` OR an `object` where the values are `string`s equal to one of `left|right|center|justify|justify-center` for each desired breakpoint. Defaults to `left`.

#### verticalAlign

Controls the vertical alignment of grid units.

A `string` equal to one of `top|bottom|center|stretch` OR an `object` where the values are `string`s equal to one of `top|bottom|center|stretch` for each desired breakpoint. Defaults to `stretch`.

### reverse

Reverse the order of the grid units.

A `boolean` OR an `object` where the values are `booleans`s for each desired breakpoint. Defaults to `false`.

### wrap

Whether the grid units should wrap across multiple lines or a single line.

A `boolean` OR an `object` where the values are `booleans`s for each desired breakpoint. Defaults to `true`.

#### component

The component to render the styles on.

Optional. A `string` or valid React component. Defaults to `div`.

### &lt;Grid.Unit/&gt;

#### size

Controls the width of the grid unit.

A `number` between `0` and `1` OR a `string` of `min` or `max` OR an `object` where the values are a `number` between `0` and `1` OR a `string` of `min` or `max` for each desired breakpoint.

#### visible

Controls whether the grid unit is visible.

A `boolean` OR an `object` where the values are `booleans`s for each desired breakpoint. Defaults to `true`.

#### component

The component to render the styles on.

Optional. A `string` or valid React component. Defaults to `div`.

## Mixins

### grid(opts)

Apply grid styles.

* `halign`
* `valign`
* `wrap`
* `reverse`

### grid.unit(opts)

Apply grid unit styles.

* `size`
* `visible`
