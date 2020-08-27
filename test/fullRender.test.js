const assert = require('assert')

const config = {}
config.size = true
config.position = true
// config.bnnGradient = true;
config.variable = true
config.imports = true
config.align = true
config.width = true
config.height = true

const vcss = require('../src/index.js')(config)

describe('render()', () => {

  it('should return the fully rendered css', () => {

    const stylesheet = '.test {color:#000; size: 50px 100px;}' +
      '.b {color:#000; position: 10px 5px 8px 90px; margin: 10px;}'

    const result = vcss.render(stylesheet, 'test.vcss')

    const expect = '.test {\n  color: #000;\n  width: 50px;\n' +
      '  height: 100px;\n}\n\n.b {\n  color: #000;\n' +
      '  top: 10px;\n  right: 5px;\n  bottom: 8px;\n' +
      '  left: 90px;\n  margin: 10px;\n}'

    assert.equal(result, expect)
  })
})