# felt-pen

Tiny ANSI terminal coloring library

## Install

```sh
yarn add felt-pen
```

## Usage

```js
import * as pen from 'felt-pen'

console.log( pen.blue( `Hello, ${pen.bold( 'World' )}!!!` ) )
```

See [the demo](./demo.js) for all supported ansi attributes.
