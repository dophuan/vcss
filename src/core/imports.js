const css = require('css')
const addIterations = require('@ando105/ast-css-iter')
const fs = require('fs')
const path = require('path')

const imports = (importPath, ast, index, inputPath) => {
    ast.removeRule(index)

    const basePath = path.dirname(inputPath)
    const importPathClean = importPath
        .replace(/\"/g, '')
        .replace(/\'/g, '')
    const resolvedPath = path.resolve(basePath + '/' + importPathClean)

    const mod = fs.readFileSync(resolvedPath, 'utf8')
    const astModule = css.parse(mod)
    addIterations(astModule)

    astModule.getAllRules((rule) => {
        ast.addRule(rule, index)
    })

};

module.exports = imports