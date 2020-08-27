const assert = require('assert')
const css = require('css')
const addIterations = require('@ando105/ast-css-iter')
const bnnRow = require('../src/core/row.js')

describe('row()', () => {
    it('Should return a centered responsive flex container.', () => {

        const ast = css.parse('.test{row: 900px;}')
        addIterations(ast)

        ast.stylesheet.rules.forEach((rule) => {
            if (rule.selectors) bnnRow(rule)
        })

        const result = css.stringify(ast)
        const expect = '.test {\n  display: flex;\n  flex-wrap: wrap;\n' +
            '  width: 100%;\n  max-width: 900px;\n  margin-right: auto;\n' +
            '  margin-left: auto;\n}'

        assert.equal(result, expect)
    })
})