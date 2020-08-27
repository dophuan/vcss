'use strict'

const css = require('css')
const astIter = require('@ando105/ast-css-iter')

const Banana = (config) => {
    return {
        render: (stylesheet, inputPath = 'fake_path') => {
            const ast = css.parse(stylesheet)

            astIter(ast)

            ast.getImports((urlForImport, index) => {
                if (config.imports || config.imports === undefined) {
                    const imports = require('../src/core/imports.js')
                    imports(urlForImport, ast, index, inputPath)
                }
            })

            ast.getAllRulesBySelector(':root', (rule, index) => {
                if (config.variable || config.variable === undefined) {
                    require('../src/core/var.js')(ast, rule, index)
                }
            })

            ast.backwardRulesTracer((rule, index) => {
                const isFunction = /\@function\ /.test(rule.selectors);
                if (isFunction) {
                    if (config.function || config.function === undefined) {
                        require('../src/core/func.js')(rule, ast, index)
                    }
                }
            })

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

                if (config.row || config.row === undefined) {
                    require('../src/core/row.js')(rule)
                }

                if (config.col || config.col === undefined) {
                    require('../src/core/col.js')(rule)
                }

                if (config.height || config.height === undefined) {
                    require('../src/core/height.js')(rule)
                }

                if (config.width || config.width === undefined) {
                    require('../src/core/width.js')(rule)
                }
            })
            return css.stringify(ast, { compress: config.compress })

        }
    }

}

module.exports = Banana