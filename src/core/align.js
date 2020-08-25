const align = (rule) => {
    rule.findDeclarationsByProperty('align', (declaration, index) => {
  
      rule.removeDeclaration(index)
  
      const horizontalProp = declaration.getParam(0)
      const verticalProp = declaration.getParam(1)
  
      const horizontalValues = [
        { type: 'left',
          declarations: {
            property: 'justify-content',
            value: 'flex-start'
          }
        },
        { type: 'right',
          declarations: {
            property: 'justify-content',
            value: 'flex-end'
          }
        },
        { type: 'center',
          declarations: {
            property: 'justify-content',
            value: horizontalProp
          }
        }
      ]
  
      const verticalValues = [
        { type: 'top',
          declarations: {
            property: 'align-items',
            value: 'flex-start'
          }
        },
        { type: 'bottom',
          declarations: {
            property: 'align-items',
            value: 'flex-end'
          }
        },
        { type: 'center',
          declarations: {
            property: 'align-items',
            value: verticalProp
          }
        }
      ]
  
      const vertical = (element) => {
        if (element.type === verticalProp) {
          const property = element.declarations.property
          const value = element.declarations.value
          rule.addDeclaration(property, value, index)
        }
      }
  
      const horizontal = (element) => {
        if (element.type === horizontalProp) {
          const property = element.declarations.property
          const value = element.declarations.value
          rule.addDeclaration(property, value, index)
        }
      }
  
      verticalValues.forEach(vertical)
      horizontalValues.forEach(horizontal)
  
      rule.addDeclaration('flex-wrap', 'wrap', index)
      rule.addDeclaration('display', 'flex', index)
  
    })
  }
  
  module.exports = align