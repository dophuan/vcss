# function

## Summary
The `box` property is to create reusable function.

<hr>

## Syntax

```css
@function <function_name>([args]) {

}

.test {
    func: <function_name>;
}
```

<hr>

## Examples

Vcss code:
```css
@function testFunc(arg) {
  width: arg;
}

.foo {
    func: testFunc(100px);
}
```

Generated CSS code:
```css
.foo {
  width: 100px;
}
```