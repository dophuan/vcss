const assert = require('assert')
const css = require('css')
const addIter = require('@ando105/ast-css-iter')
const position = require('../src/core/position.js')

describe('position()', () => {

  it('Should return a top,right,bottom and left with 4 specific' +
    ' values.', () => {

    const ast = css.parse('.a{ position: 10px 20px 30px 40px;}')
    addIter(ast)

    ast.stylesheet.rules.forEach((rule) => {
      if (rule.selectors) position(rule)
    })

    const result = css.stringify(ast)
    const expect = '.a {\n  top: 10px;\n  right: 20px;\n  bottom: 30px;\n' +
      '  left: 40px;\n}';

    assert.equal(result, expect)
  })

  it('Should return a top,right,bottom and left with 3 values', () => {

    const ast = css.parse('.a{ position: 10px 20px 30px;}')
    addIter(ast)

    ast.stylesheet.rules.forEach((rule) => {
      if (rule.selectors) position(rule)
    })

    const result = css.stringify(ast)
    const expect = '.a {\n  left: 20px;\n  bottom: 30px;\n  right: 20px;\n' +
    '  top: 10px;\n}';

    assert.equal(result, expect)
  })

  it('Should return a top,right,bottom and left with 2 values', () => {

    const ast = css.parse('.a{ position: 10px 20px;}')
    addIter(ast)

    ast.stylesheet.rules.forEach((rule) => {
      if (rule.selectors) position(rule)
    })

    const result = css.stringify(ast)
    const expect = '.a {\n  left: 20px;\n  bottom: 10px;\n  right: 20px;\n' +
    '  top: 10px;\n}';

    assert.equal(result, expect)
  })

  it('Should return a top,right,bottom and left with a specific' +
    ' value.', () => {

    const ast = css.parse('.a{ position: 10px;}')
    addIter(ast)

    ast.stylesheet.rules.forEach((rule) => {
      if (rule.selectors) position(rule)
    })

    const result = css.stringify(ast)
    const expect = '.a {\n  top: 10px;\n  right: 10px;\n  bottom: 10px;\n' +
      '  left: 10px;\n}';

    assert.equal(result, expect)
  })

  it('Should return a block centered element', () => {

    const ast = css.parse('.a{ position: center;}')
    addIter(ast)

    ast.stylesheet.rules.forEach((rule) => {
      if (rule.selectors) position(rule)
    })

    const result = css.stringify(ast)
    const expect = '.a {\n  display: block;\n  margin-left: auto;\n' +
      '  margin-right: auto;\n}';

    assert.equal(result, expect)
  })

})