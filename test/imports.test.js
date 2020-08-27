const assert = require('assert')
const css = require('css')
const addIterations = require('@ando105/ast-css-iter')
const imports = require('../src/core/imports.js')

describe('imports()', () => {

  it('Should return the module.vcss file imported into the' +
    ' main.vcss file', () => {

    const ast = css.parse('@import ./module.vcss; .a {width: 500px;}')
    addIterations(ast)

    ast.stylesheet.rules.forEach((rule, index) => {
      if (rule.import) imports(rule.import, ast, index, 'test/main.vcss')
    })

    const result = css.stringify(ast)
    const expect = '.test {\n  background-color: #fff;\n}\n\n.a {\n  width: 500px;\n}'

    assert.equal(result, expect)
  })
})