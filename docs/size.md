# size

## Summary
The `size` property allows to declare width height of an object faster.

<hr>

## Syntax

```css
.foo {
  size: <width> <height> | <size> | auto;
}
```

<hr>

## Examples

### Equal width and height

Vcss code:
```css
.foo {
  size: 10px;
}
```

Generated CSS code:
```css
.foo {
  width: 10px;
  height: 10px;
}
```

### Specific width and height

Vcss code:
```css
.foo {
  size: 10px 15px;
}
```

Generated CSS code:
```css
.foo {
  width: 10px;
  height: 15px;
}
```