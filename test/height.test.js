const assert = require('assert')
const css = require('css')
const addIterations = require('@ando105/ast-css-iter')
const height = require('../src/core/height.js')

describe('height()', () => {

    it('Should return a responsive combination of height' +
        ' and max-height values.', () => {

            const ast = css.parse('.a{combi-height: 300px;}')
            addIterations(ast)

            ast.stylesheet.rules.forEach((rule) => {
                if (rule.selectors) height(rule)
            })

            const result = css.stringify(ast)
            const expect = '.a {\n  height: 100%;\n  max-height: 300px;\n}';

            assert.equal(result, expect)
        })

})