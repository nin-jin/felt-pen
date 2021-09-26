# felt-pen

Tiny ANSI terminal coloring library

![](https://i.imgur.com/OoYJm3E.png)

## [Benchmarks](https://github.com/ai/nanocolors#benchmarks)

### Calling

```
chalk          1,192,251 ops/sec
cli-color        130,947 ops/sec
ansi-colors      683,415 ops/sec
kleur          1,352,980 ops/sec
kleur/colors   1,383,478 ops/sec
colorette      1,503,513 ops/sec
felt-pen       1,414,047 ops/sec
nanocolors     1,530,478 ops/sec
```

### Loading

```
chalk         13.964 ms
cli-color     98.851 ms
ansi-colors    3.832 ms
kleur          7.182 ms
kleur/colors   1.469 ms
colorette      2.221 ms
felt-pen       1.424 ms
nanocolors     2.494 ms
```

### Size

```
chalk         101 kB
cli-color    1249 kB
ansi-colors    25 kB
kleur          21 kB
colorette      16 kB
felt-pen        9 kB
nanocolors     16 kB
```

## Install

```sh
yarn add felt-pen
```

## Usage

```js
import * as pen from 'felt-pen'

console.log( pen.blue( `Hello, ${pen.bold( 'World' )}!!!` ) )
```

See the demo ([mjs](./demo.mjs), [cjs](./demo.mjs)) for all supported ansi attributes.
