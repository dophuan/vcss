const assert = require('assert')
const css = require('css')
const addIter = require('@ando105/ast-css-iter')
const align = require('../src/core/box.js')

describe('align()', () => {
  it('Should return a bordered box', () => {

    const ast = css.parse('.test { box: border;}')
    addIter(ast)


    ast.stylesheet.rules.forEach((rule) => {
      if (rule.selectors) align(rule)
    })

    const result = css.stringify(ast)
    const expect = '.test {\n  box-sizing: border-box;\n}';

    assert.equal(result, expect)
  })

  it('Should return a content box', () => {

    const ast = css.parse('.test { box: content;}');
    addIter(ast)

    ast.stylesheet.rules.forEach((rule) => {
      if (rule.selectors) align(rule)
    })

    const result = css.stringify(ast)
    const expect = '.test {\n  box-sizing: content-box;\n}'

    assert.equal(result, expect)
  })
})