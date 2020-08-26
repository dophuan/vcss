const assert = require('assert')
const css = require('css')
const addIter = require('@ando105/ast-css-iter')
const text = require('../src/core/text.js')

describe('text()', () => {
  it('Should return text truncated class without width', () => {

    const ast = css.parse('.test { text-truncated: true;}')
    addIter(ast)


    ast.stylesheet.rules.forEach((rule) => {
      if (rule.selectors) text(rule)
    })

    const result = css.stringify(ast)
    const expect = '.test {\n  white-space: nowrap;\n  overflow: hidden;\n' +
    '  text-overflow: ellipsis;\n}'

    assert.equal(result, expect)
  })

  it('Should return text truncated class with width', () => {

    const ast = css.parse('.test { text-truncated: true 250px;}')
    addIter(ast)

    ast.stylesheet.rules.forEach((rule) => {
      if (rule.selectors) text(rule)
    })

    const result = css.stringify(ast)
    const expect = '.test {\n  width: 250px;\n  white-space: nowrap;\n' +
    '  overflow: hidden;\n  text-overflow: ellipsis;\n}'

    assert.equal(result, expect)
  })
})