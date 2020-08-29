const assert = require('assert')
const css = require('css')
const addIterations = require('@ando105/ast-css-iter')
const font = require('../src/core/font.js')

describe('font()', () => {
    it('Should return a container with a specific font weight' +
        ', size and color', () => {

            const ast = css.parse('.foo{ font: inherit 15px #fafafa; }')
            addIterations(ast)

            ast.stylesheet.rules.forEach((rule) => {
                if (rule.selectors) font(rule)
            })

            const result = css.stringify(ast)
            const expect = '.foo {\n  color: #fafafa;\n' +
                '  font-size: 15px;\n  font-weight: inherit;\n}'

            assert.equal(result, expect)
        })

    it('Should return a container with a specific font size and color', () => {

        const ast = css.parse('.foo{ font: #fafafa 15px;}')
        addIterations(ast)

        ast.stylesheet.rules.forEach((rule) => {
            if (rule.selectors) font(rule)
        })

        const result = css.stringify(ast)
        const expect = '.foo {\n  font-size: 15px;\n' +
            '  color: #fafafa;\n}'

        assert.equal(result, expect)
    })

    it('Should return a container with a specific font size and font weight', () => {

        const ast = css.parse('.foo{ font: xx-small lighter;}')
        addIterations(ast)

        ast.stylesheet.rules.forEach((rule) => {
            if (rule.selectors) font(rule)
        })

        const result = css.stringify(ast)
        const expect = '.foo {\n  font-weight: lighter;\n' +
            '  font-size: xx-small;\n}'

        assert.equal(result, expect)
    })

})