const assert = require('assert')
const css = require('css')
const addIter = require('@ando105/ast-css-iter')
const align = require('../src/core/align.js')

describe('align()', () => {
  it('Should return a vertical and horizontal centralized flex container', () => {

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

  it('Should return a flex container whose content on' +
    ' left and top corner', () => {

    const ast = css.parse('.test-left-top{ align: left top;}');
    addIter(ast)

    ast.stylesheet.rules.forEach((rule) => {
      if (rule.selectors) align(rule)
    })

    const result = css.stringify(ast)
    const expect = '.test-left-top {\n  display: flex;\n  flex-wrap: wrap;\n  ' +
      'justify-content: flex-start;\n  align-items: flex-start;\n}'

    assert.equal(result, expect)
  })

  it('Should return a flex container whose content to ' +
    'left and bottom corner', () => {

    const ast = css.parse('.test-left-bottom{ align: left bottom;}');
    addIter(ast)

    ast.stylesheet.rules.forEach((rule) => {
      if (rule.selectors) align(rule)
    })

    const result = css.stringify(ast)
    const expect = '.test-left-bottom {\n  display: flex;\n  flex-wrap: wrap;\n  ' +
      'justify-content: flex-start;\n  align-items: flex-end;\n}'

    assert.equal(result, expect)
  })
})