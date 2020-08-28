# text

## Summary
The `text` property adds text overflow style to a text.

<hr>

## Syntax

```css
.foo {
  text: [ true | false ] | [<width> | <empty>]
}
```

<hr>

## Examples

### Truncated text without width

Vcss code:
```css
.foo {
  text-truncated: true;
}
```

Generated CSS code:
```css
.foo {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

### Truncated text field with width is set to 100px

Vcss code:
```css
.foo {
  text-truncated: true 100px;
}
```

Generated CSS code:
```css
.foo {
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```