# VCSS
:vietnam: a customized css preprocessor created by a Vietnamese 

![CI/CD](https://github.com/dophuan/vcss/workflows/CI/CD/badge.svg)

## What is?

- Syntax **abstractions** for complex native CSS features.:cactus:
- Can be compiled as a **pre-processor**


<hr>

## How to install

Verify if you have [node](http://nodejs.org/) and [npm](https://www.npmjs.org/) installed.

### Command Line

```sh
$ npm install -g @ando105/vcss
```

### Module

```sh
$ npm install @ando105/vcss --save
```

<hr>

### Cmd usage

Compile `.vcss` file to `.css`
```sh
$ vcss <input_path>
```

Compile `.vcss` file to `.css` and export to a specific path
```sh
$ vcss <input_path> -o <output_path>
```

Version
```sh
$ vcss --version
```

<hr>

## Features :fire:

- [align](docs/align.md) property
- Intuitive box model with [box](docs/box.md) property and content/border values
- Create reusable code with [function](docs/func.md)
- Customized [grid layout](docs/grid.md) with `row` and `col`
- [Import](docs/importHandler.md) vcss module with native `@import` syntax
- [size](docs/size.md) property
- [Truncated text](docs/text.md) property 
- [width](docs/width.md) and [height](docs/height.md) property

<hr>

## History :hourglass:

See [Releases](https://github.com/dophuan/vcss/releases) for detailed changelog.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](https://opensource.org/licenses/MIT)
