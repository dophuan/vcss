# align

## Summary
The `align` property provides an aligned flex container.

<hr>

## Syntax

```css
.foo {
  align: [ right | center | left ] [ top | center | bottom ] | center;
}
```

<hr>

## Examples

### Horizontal and vertical centered container

Vcss code:
```css
.foo {
  align: center; /* == center center*/
}
```

Generated CSS code:
```css
.foo {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
```

### Center and bottom container alignment

Vcss code:
```css
.foo {
  align: center bottom;
}
```

Generated CSS code:
```css
.foo {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
}
```