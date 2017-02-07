# styled-components-grid

Responsive grid components for `styled-components`.

## Installation

    npm install --save styled-components styled-components-grid
    
## Usage

### Using the default breakpoints

```js
import React from 'react';
import Grid from 'styled-components-grid';

<Grid>
  <Grid.Unit width={1/6}>Awesome!</Grid.Unit>
  <Grid.Unit width={1/3}>Amazing!</Grid.Unit>
  <Grid.Unit width={{tablet: 1, desktop: 1/2}}>Out of this world!</Grid.Unit>
</Grid>

```

### Using custom breakpoints

```js
import React from 'react';
import {ThemeProvider} from 'styled-components';
import Grid from 'styled-components-grid';

const theme = {
  breakpoints: {
    sm: 600,
    md: 900,
    lg: 1200
  }
};

<ThemeProvider theme={theme}>
  <Grid>
    <Grid.Unit width={1/6}>Awesome!</Grid.Unit>
    <Grid.Unit width={1/3}>Amazing!</Grid.Unit>
    <Grid.Unit width={{sm: 1, lg: 1/2}}>Out of this world!</Grid.Unit>
  </Grid>
</ThemeProvider>

```

## API

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

### &lt;Grid.Unit/&gt;

#### width

Controls the width of the grid unit.

A `number` OR an `object` where the values are `number`s for each desired breakpoint. Defaults to `true`.

#### visible

Controls whether the grid unit is visible.

A `boolean` OR an `object` where the values are `booleans`s for each desired breakpoint. Defaults to `true`.
