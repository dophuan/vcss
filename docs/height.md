# height

## Summary
The `combi-height` property provide a `max-height` lenght for a 100% `height` element.

<hr>

## Syntax

```css
.foo {
  combi-height: <length> | auto;
}
```

**Initial value:** auto

<hr>

## Examples

### Responsive container

vcss code:
```css
.foo {
  combi-height: 900px;
}
```

Generated CSS code:
```css
.foo {
  height: 100%;
  max-height: 900px;
}
```

### Default value

vcss code:
```css
.foo {
  combi-height: auto;
}
```

Generated CSS code:
```css
.foo {
  height: auto;
  max-height: none;
}
```