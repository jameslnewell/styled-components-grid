# styled-components-grid

Responsive grid components for `styled-components` 💅.

[Documentation](https://jameslnewell.github.io/styled-components-grid/)

## Installation

    npm install --save styled-components styled-components-grid
    
## Usage

### Using the default breakpoints

```js
import React from 'react';
import Grid from 'styled-components-grid';

<Grid>
  <Grid.Unit size={1/6}>Awesome!</Grid.Unit>
  <Grid.Unit size={1/3}>Amazing!</Grid.Unit>
  <Grid.Unit size={{tablet: 1/2, desktop: 1/4}}>Out of this world!</Grid.Unit>
</Grid>

```

### Using custom breakpoints

You can customise the default breakpoints. If you would like to use the same breakpoints as [Bootstrap](https://v4-alpha.getbootstrap.com/layout/overview/#responsive-breakpoints), you can do so like this:

```js
import React from 'react';
import {ThemeProvider} from 'styled-components';
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
    <Grid.Unit size={1/6}>Awesome!</Grid.Unit>
    <Grid.Unit size={1/3}>Amazing!</Grid.Unit>
    <Grid.Unit size={{lg: 1/5}}>Out of this world!</Grid.Unit>
  </Grid>
</ThemeProvider>

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

A `boolean` OR an `object` where the values are `booleans`s for each desired breakpoint. Defaults to `false`.

#### component

The component to render the styles on.

Optional. A `string` or valid React component. Defaults to `div`.

### &lt;Grid.Unit/&gt;

#### width

Controls the width of the grid unit.

A `number` OR an `object` where the values are `number`s for each desired breakpoint. Defaults to `true`.

#### visible

Controls whether the grid unit is visible.

A `boolean` OR an `object` where the values are `booleans`s for each desired breakpoint. Defaults to `true`.

#### component

The component to render the styles on.

Optional. A `string` or valid React component. Defaults to `div`.

## Mixins

### grid(opts)

### grid.unit(width, opts)

## Change log

### 1.0.0-preview.13

- added `size` and deprecated `width`
- added `halign` and deprecated `horizontalAlign`
- added `valign` and deprecated `verticalAlign`
- made `Grid.Unit` `display: flex`
- stopped rendering default styles when not required in order to make overriding styles easier (less `!important`s in your codebase)
- added mixins
- added tests
- added docs website

### 1.0.0-preview.9

- fix: updated documentation

### 1.0.0-preview.8

- fix: `wrap` and other props were broken if you didn't specify a value for the mobile breakpoint. Updated `styled-components-breakpoint` which contains a fix.

### 1.0.0-preview.7

- added: `min` and `max` widths to `Grid.Unit`
- added: docs for `wrap` to `Grid`

### 1.0.0-preview.6

- fix: switch to `prop-types` to remove `react` warnings
- fix: add missing `react` dependency to `peerDependencies` 