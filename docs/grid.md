# Grid system

## Summary
Abstraction for a powerful semantic grid system based on flexbox and calc() function.

<hr>

## Syntax

```css
.foo {
  row: <length>; /* Container max-width */
}

.bar {
  col: <integer>/<integer> <length>; /* cols/number-of-cols gutter*/
}
```

<hr>

## Examples

### 12 cols grid system (gutter is set to 5px)

Vcss code:
```css
.row {
  row: 1280px;
}

.aside {
  col: 4/12 5px;
}
```

Generated CSS code:
```css
.row {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;
}

.aside {
  width: calc(((100% * 4) / 12) - (5px * 2));
  margin-right: 5px;
  margin-left: 5px;
}
```

### 24 cols grid system without gutters
Vcss code:
```css
.row {
  row: 1200px;
}

.aside {
  col: 2/24;
}
```

Generated CSS code:
```css
.row {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
}

.aside {
  width: calc(((100% * 2) / 24) - (0px * 2));
  margin-right: 0px;
  margin-left: 0px;
}
```