const assert = require('assert')
const css = require('css')
const addIter = require('@ando105/ast-css-iter')
const align = require('../src/core/align.js')

describe('align()', () => {
  it('Should return a vertical and horizontal centralized flex container' +
    'with one value', () => {

    const ast = css.parse('.test{ align: center;}')
    addIter(ast)


    ast.stylesheet.rules.forEach((rule) => {
      if (rule.selectors) align(rule)
    })

    const result = css.stringify(ast)
    const expect = '.test {\n  display: flex;\n  flex-wrap: wrap;\n' +
      '  justify-content: center;\n  align-items: center;\n}';

    assert.equal(result, expect)
  })
})