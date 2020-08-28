# width

## Summary
The `combi-width` property provide a `max-width` lenght for a 100% `width` element.

<hr>

## Syntax

```css
.foo {
  combi-width: <length> | auto;
}
```

**Initial value:** auto

<hr>

## Examples

### Responsive container

vcss code:
```css
.foo {
  combi-width: 900px;
}
```

Generated CSS code:
```css
.foo {
  width: 100%;
  max-width: 900px;
}
```

### Default value

vcss code:
```css
.foo {
  combi-width: auto;
}
```

Generated CSS code:
```css
.foo {
  width: auto;
  max-width: none;
}
```