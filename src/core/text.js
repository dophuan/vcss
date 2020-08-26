const textTruncated = (rule) => {
    rule.findDeclarationsByProperty('text-truncated', (declaration, index) => {
        rule.removeDeclaration(index)
        
        const first = declaration.getParam(0)
        const second = declaration.getParam(1)

        if (first === second && first === 'true') {
            rule.addDeclaration('text-overflow', 'ellipsis', index)
            rule.addDeclaration('overflow', 'hidden', index)
            rule.addDeclaration('white-space', 'nowrap', index)
        }
        else if (/^\d{1,4}(px|\%|em|rem)\;{0,1}$/.test(second)){
            rule.addDeclaration('text-overflow', 'ellipsis', index)
            rule.addDeclaration('overflow', 'hidden', index)
            rule.addDeclaration('white-space', 'nowrap', index)
            rule.addDeclaration('width', second, index)
        }
    })
}

module.exports = textTruncated
