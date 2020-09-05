const assert = require('assert')

const config = {}
config.size = true
config.position = true
config.variable = true
config.imports = true
config.align = true
config.width = true
config.height = true

const vcss = require('../src/index.js')(config)

describe('render()', () => {

  it('should return the fully rendered css', () => {

    const stylesheet = '.foo {color:#000; size: 50px 100px;}' +
      '.bar {color:#000; position: 10px 5px 8px 90px; margin: 10px;}' +
      '.text { text-truncated: true 100px; font: 400 #fafafa smaller}'

    const result = vcss.render(stylesheet, 'test.vcss')

    const expect = '.foo {\n  color: #000;\n  width: 50px;\n' +
      '  height: 100px;\n}\n\n.bar {\n  color: #000;\n' +
      '  top: 10px;\n  right: 5px;\n  bottom: 8px;\n' +
      '  left: 90px;\n  margin: 10px;\n}\n\n' +
      '.text {\n  width: 100px;\n  white-space: nowrap;\n  overflow: hidden;\n' +
      '  text-overflow: ellipsis;\n  font-size: smaller;\n' +
      '  color: #fafafa;\n  font-weight: 400;\n}'

    assert.equal(result, expect)
  })
})