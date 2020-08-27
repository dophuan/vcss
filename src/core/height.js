const combiHeight = (rule) => {
    rule.findDeclarationsByProperty('combi-height', (declaration, index) => {

        rule.removeDeclaration(index)

        const height = declaration.getParam(0)

        rule.addDeclaration('max-height', height, index)
        rule.addDeclaration('height', '100%', index)

    })
}

module.exports = combiHeight