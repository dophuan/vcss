const combiWidth = (rule) => {
    rule.findDeclarationsByProperty('combi-width', (declaration, index) => {

        rule.removeDeclaration(index)

        const width = declaration.getParam(0)

        rule.addDeclaration('max-width', width, index)
        rule.addDeclaration('width', '100%', index)
    })
}

module.exports = combiWidth