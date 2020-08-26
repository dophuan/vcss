const size = (rule) => {
    rule.findDeclarationsByProperty('size', (declaration, index) => {

        rule.removeDeclaration(index)

        const width = declaration.getParam(0)
        const height = declaration.getParam(1)

        rule.addDeclaration('height', height, index)
        rule.addDeclaration('width', width, index)

    })
}

module.exports = size