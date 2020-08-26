const position = (rule) => {
    rule.findDeclarationsByProperty('position', (declaration, index) => {
        rule.removeDeclaration(index)

        const params = declaration.value.split(' ')
        const first = declaration.getParam(0)
        const second = declaration.getParam(1)
        const third = declaration.getParam(2)
        const fourth = declaration.getParam(3)

        switch (params.length) {
            case 1:
                if (params[0] === 'center') {
                    rule.addDeclaration('margin-right', 'auto', index)
                    rule.addDeclaration('margin-left', 'auto', index)
                    rule.addDeclaration('display', 'block', index)
                }
                else if (/^\d{1,4}px\;{0,1}$/.test(first)){
                    rule.addDeclaration('left', first, index)
                    rule.addDeclaration('bottom', first, index)
                    rule.addDeclaration('right', first, index)
                    rule.addDeclaration('top', first, index)
                }
                break
            case 2:
                rule.addDeclaration('left', second, index)
                rule.addDeclaration('bottom', first, index)
                rule.addDeclaration('right', second, index)
                rule.addDeclaration('top', first, index)
                break
            case 3:
                rule.addDeclaration('left', second, index)
                rule.addDeclaration('bottom', third, index)
                rule.addDeclaration('right', second, index)
                rule.addDeclaration('top', first, index)
                break
            case 4:
                rule.addDeclaration('left', fourth, index)
                rule.addDeclaration('bottom', third, index)
                rule.addDeclaration('right', second, index)
                rule.addDeclaration('top', first, index)
                break
        }
    })
}

module.exports = position