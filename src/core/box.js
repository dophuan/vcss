const box = (rule) => {
    rule.findDeclarationsByProperty('box', (declaration, index) => {
        rule.removeDeclaration(index)
        let boxModel = declaration.getParam(0)

        if (boxModel === 'border' || boxModel === 'content') {
            boxModel = `${boxModel}-box`
        }

        rule.addDeclaration('box-sizing', boxModel, index)
    })
}

module.exports = box