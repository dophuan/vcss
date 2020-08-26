const assert = require('assert')
const css = require('css')
const addIter = require('@ando105/ast-css-iter')
const size = require('../src/core/size.js')

describe('size()', () => {
  it('Should return a width and height with one specific value.', () => {

    const ast = css.parse('.test{size: 10px;}')
    addIter(ast)

    ast.stylesheet.rules.forEach((rule) => {
      if (rule.selectors) size(rule)
    })

    const result = css.stringify(ast)
    const expect = '.test {\n  width: 10px;\n  height: 10px;\n}';

    assert.equal(result, expect)
  })

  it('Should return a width and height with two specific values.', () => {

    const ast = css.parse('.test{size: 10px 50px;}')
    addIter(ast)

    ast.stylesheet.rules.forEach((rule) => {
      if (rule.selectors) size(rule)
    })

    const result = css.stringify(ast)
    const expect = '.test {\n  width: 10px;\n  height: 50px;\n}';

    assert.equal(result, expect)
  })

})