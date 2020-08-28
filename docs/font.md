# font

## Summary
The `font` property allows to setup font weight, color and size in a shorthand.

<hr>

## Syntax

```css
.foo {
  font: [ weight | size | color] [ weight | size | color] [ weight | size | color | empty]
}
```

<hr>

## Examples

### Font style with a specific weight, size and color

Vcss code:
```css
.foo {
  font: 300 15px #fafafa;
}
```

Generated CSS code:
```css
.foo {
  color: #fafafa;
  font-size: 15px;
  font-weight: 300;
}
```

### Inside box

Vcss code:
```css
.foo {
  font: 15px #fafafa;
}
```

Generated CSS code:
```css
.foo {
  color: #fafafa;
  font-size: 15px;
}
```