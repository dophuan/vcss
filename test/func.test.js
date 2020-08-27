const assert = require('assert')
const css = require('css')
const addIterations = require('@ando105/ast-css-iter')
const fn = require('../src/core/func.js')

describe('fn()', () => {
  it('Should return a static compiled @function', () => {

    const ast = css.parse(`
      @function starWars {
      	width: 200px;
      }
      @function starTrek {
      	height: 200px;
        color: #fff;
      }
      .foo {
      	func: starWars;
      }
      .bar {
      	func: starTrek;
      }
    `)

    addIterations(ast)

    ast.backwardRulesTracer((rule, index) => {
      const isFunction = /\@function\ /.test(rule.selectors)
      if (isFunction) {
        fn(rule, ast, index)
      }
    })

    const result = css.stringify(ast)
    const expect = '.foo {\n  width: 200px;\n}\n\n.bar {\n' +
      '  color: #fff;\n  height: 200px;\n}'

    assert.equal(result, expect)
  })

  

  it('Should return a static compiled @function with arguments', () => {

    const ast = css.parse(`
      @function starWars(size, color) {
        width: size;
        color: color;
      }
      .foo {
        func: starWars(100%, #000)
      }
    `)

    addIterations(ast)

    ast.backwardRulesTracer((rule, index) => {
      const isFunction = /\@function\ /.test(rule.selectors)
      if (isFunction) {
        fn(rule, ast, index)
      }
    })

    const result = css.stringify(ast)
    const expect = '.foo {\n  color: #000;\n  width: 100%;\n}'

    assert.equal(result, expect)
  })

})