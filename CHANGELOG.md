# Change log

### 2.2.2

* bumped support of `styled-components` ([#20](https://github.com/jameslnewell/styled-components-grid/pull/20))

### 2.2.1

* fixed `Grid.Unit` size prop for `0` value
* fixed documentation for the `size` prop

### 2.2.0

* bumped `react-create-component-from-tag-prop`

### 2.1.0

* added the `module` field
* added badges to README

## 2.0.1

* fixed docs ([#15](https://github.com/jameslnewell/styled-components-grid/pull/15)) ([#16](https://github.com/jameslnewell/styled-components-grid/pull/14))

## 2.0.0

No changes

## 2.0.0-preview.1

* upgraded `react` and `styled-components` `peerDependency`s
* upgraded `styled-components-breakpoint` to v3 for simplified use of custom breakpoints
* changed `max-width: none` to `max-width: 100%` for `size="max"` in order to constrain the width to the parent container
* changed to throw an error instead of falling back to the default if an invalid prop value is passed
* removed deprecated properties

## 1.0.0-preview.15

* fixed typo with `wrap` (changed `no-wrap` to `nowrap`)
* reverted change: made `Grid.Unit` `display: flex`

## 1.0.0-preview.14

* fixed documentation for the `wrap` default value

## 1.0.0-preview.13

* added `size` and deprecated `width`
* added `halign` and deprecated `horizontalAlign`
* added `valign` and deprecated `verticalAlign`
* made `Grid.Unit` `display: flex`
* stopped rendering default styles when not required in order to make overriding styles easier (less `!important`s in your codebase)
* added mixins
* added tests
* added docs website

## 1.0.0-preview.9

* fix: updated documentation

## 1.0.0-preview.8

* fix: `wrap` and other props were broken if you didn't specify a value for the mobile breakpoint. Updated `styled-components-breakpoint` which contains a fix.

## 1.0.0-preview.7

* added: `min` and `max` widths to `Grid.Unit`
* added: docs for `wrap` to `Grid`

## 1.0.0-preview.6

* fix: switch to `prop-types` to remove `react` warnings
* fix: add missing `react` dependency to `peerDependencies`
