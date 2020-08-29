function isFontWeight(text) {
    return /normal|bold|bolder|lighter|initial|inherit|^\d+$/.test(text)
}

function isFontSize(text){
    return /medium|xx-small|x-small|small|large|x-large|xx-large|smaller|larger|^\d{1,4}(px|rem|em|%)\;{0,1}$|initial|inherit/.test(text)
}

function isColor(text) {
    return /(^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$)|(^rgba?\(.*\)$)|(^hsla?\(.*\)$)|(^\w+$)/.test(text)
}

const font = (rule) => {
    rule.findDeclarationsByProperty('font', (declaration, index) => {
        rule.removeDeclaration(index)

        const numberOfParams = declaration.getAllParams().length
        const first = declaration.getParam(0)
        const second = declaration.getParam(1)
        const third = declaration.getParam(2)

        if (isFontWeight(first)) {
            rule.addDeclaration('font-weight', first, index)
        }
        else if (isFontSize(first)) {
            rule.addDeclaration('font-size', first, index)
        }
        else if (isColor(first)) {
            rule.addDeclaration('color', first, index)
        }

        if (isFontWeight(second)) {
            rule.addDeclaration('font-weight', second, index)
        }
        else if (isFontSize(second)) {
            rule.addDeclaration('font-size', second, index)
        }
        else if (isColor(second)) {
            rule.addDeclaration('color', second, index)
        }

        if (numberOfParams === 3) {
            if (isFontWeight(third)) {
                rule.addDeclaration('font-weight', third, index)
            }
            else if (isFontSize(third)) {
                rule.addDeclaration('font-size', third, index)
            }
            else if (isColor(third)) {
                rule.addDeclaration('color', third, index)
            }
        }
    })
}

module.exports = font