const font = (rule) => {
    rule.findDeclarationsByProperty('font', (declaration, index) => {
        rule.removeDeclaration(index)

        const numberOfParams = declaration.getAllParams().length
        const first = declaration.getParam(0)
        const second = declaration.getParam(1)
        const third = declaration.getParam(2)

        if (/^\d+$/.test(first)) {
            rule.addDeclaration('font-weight', first, index)
        }
        else if (/^\d{1,4}(px|rem|em)\;{0,1}$/.test(first)) {
            rule.addDeclaration('font-size', first, index)
        }
        else if (/^#[A-Fa-f0-9]{6}|#[A-Fa-f0-9]{3}$/.test(first)) {
            rule.addDeclaration('color', first, index)
        }

        if (/^\d+$/.test(second)) {
            rule.addDeclaration('font-weight', second, index)
        }
        else if (/^\d{1,4}(px|rem|em)\;{0,1}$/.test(second)) {
            rule.addDeclaration('font-size', second, index)
        }
        else if (/^#[A-Fa-f0-9]{6}|#[A-Fa-f0-9]{3}$/.test(second)) {
            rule.addDeclaration('color', second, index)
        }
        
        if (numberOfParams === 3) {
            if (/^\d+$/.test(third)) {
                rule.addDeclaration('font-weight', third, index)
            }
            else if (/^\d{1,4}(px|rem|em)\;{0,1}$/.test(third)) {
                rule.addDeclaration('font-size', third, index)
            }
            else if (/^#[A-Fa-f0-9]{6}|#[A-Fa-f0-9]{3}$/.test(third)) {
                rule.addDeclaration('color', third, index)
            }
        }
    })
}

module.exports = font