# box

## Summary
The `box` property provides a simple abstraction for the box model.

<hr>

## Syntax

```css
.foo {
  box: content | border
}
```

<hr>

## Examples

### Outside box

Vcss code:
```css
.foo {
  box: content;
}
```

Generated CSS code:
```css
.foo {
  box-sizing: content-box;
}
```

### Inside box

Vcss code:
```css
.foo {
  box: border;
}
```

Generated CSS code:
```css
.foo {
  box-sizing: border-box;
}
```