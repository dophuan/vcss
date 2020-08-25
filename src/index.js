'use strict'

const css = require('css')
const astIter = require('@ando105/ast-css-iter')

const Banana = (config) => {
  return {
    render: (stylesheet, inputPath = 'fake_path') => {
      const ast = css.parse(stylesheet)

      astIter(ast)

      ast.getAllRulesByType('rule', (rule) => {
        if (config.align || config.align === undefined) {
          require('../src/core/align.js')(rule)
        }
      })
      return css.stringify(ast, {compress: config.compress})

    }
  }

}

module.exports = Banana