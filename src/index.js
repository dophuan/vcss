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

                if (config.box || config.box === undefined) {
                    require('../src/core/box.js')(rule)
                }

                if (config.position || config.position === undefined) {
                    require('../src/core/position.js')(rule)
                }

                if (config.size || config.size === undefined) {
                    require('../src/core/size.js')(rule)
                }

                if (config.text || config.text === undefined) {
                    require('../src/core/text.js')(rule)
                }

                if (config.func || config.func === undefined) {
                    require('../src/core/func.js')(rule)
                }
            })
            return css.stringify(ast, { compress: config.compress })

        }
    }

}

module.exports = Banana