const assert = require('assert')
const css = require('css')
const addIterations = require('@ando105/ast-css-iter')
const width = require('../src/core/width.js')

describe('width()', () => {

  it('Should return a responsive combination of width' +
    ' and max-width values.', () => {

      const ast = css.parse('.a{combi-width: 300px;}')
      addIterations(ast)

      ast.stylesheet.rules.forEach((rule) => {
        if (rule.selectors) width(rule)
      })

      const result = css.stringify(ast)
      const expect = '.a {\n  width: 100%;\n  max-width: 300px;\n}';

      assert.equal(result, expect)
    })
})