# Module import handler

## Summary
Convert native `@import` to a single css file.

<hr>

## Syntax

```css
@import <path_to_vcss_file>
```

<hr>

## Examples

### Outside box

Vcss code:

```css
/* module.vcss */
.bar {
    text-truncated: true 100px;
}
```

```css
@import ./module.vcss

.foo {
  box: content;
}
```

Generated CSS code:
```css
.bar {
  width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.foo {
  box-sizing: content-box;
}
```