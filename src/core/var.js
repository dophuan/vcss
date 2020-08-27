const variable = (ast, rule, index) => {
    const customVars = []

    rule.findDeclarations((declaration, declarationIndex) => {
        customVars[declarationIndex] = [declaration.property, declaration.value]
    })

    ast.removeRule(index)

    ast.findAllDeclarations((declaration) => {

        const isVariable = /var\(/.test(declaration.value)

        if (isVariable) {
            customVars.forEach((v, index) => {

                const variableValue = declaration.value
                    .replace(/var\(/, '')
                    .replace(/\)/, '')

                const customProperty = customVars[index][0]
                const customValue = customVars[index][1]

                if (variableValue === customProperty) {
                    declaration.value = customValue
                }
            })
        }
    })
}

module.exports = variable