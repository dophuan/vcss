const assert = require('assert')
const css = require('css')
const addIterations = require('@ando105/ast-css-iter')
const col = require('../src/core/col.js')

describe('col()', () => {
    it('Should return a corresponding width with calc()' +
        ' and margins gutters.', () => {

            const ast = css.parse('.a{ col: 3/12 5px;}')
            addIterations(ast)

            ast.stylesheet.rules.forEach((rule) => {
                if (rule.selectors) col(rule)
            })

            const result = css.stringify(ast)
            const expect = '.a {\n  width: calc(((100% * 3) / 12) - (5px * 2));\n' +
                '  margin-right: 5px;\n  margin-left: 5px;\n}'

            assert.equal(result, expect)
        })

    it('Should return a corresponding width with calc()' +
        ' and no gutter', () => {

            const ast = css.parse('.a{ col: 3/12;}')
            addIterations(ast)

            ast.stylesheet.rules.forEach((rule) => {
                if (rule.selectors) col(rule)
            })

            const result = css.stringify(ast)
            const expect = '.a {\n  width: calc(((100% * 3) / 12) - (0px * 2));\n' +
                '  margin-right: 0px;\n  margin-left: 0px;\n}'

            assert.equal(result, expect)
        })

})