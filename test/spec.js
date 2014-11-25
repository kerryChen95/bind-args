var assert = require('assert')
var bindArgs = require('../bind-args')

bindArgs(func1, 'a', 2)('c', 4)

function func1 (a, b, c, d) {
  assert.strictEqual(a, 'a')
  assert.strictEqual(b, 2)
  assert.strictEqual(c, 'c')
  assert.strictEqual(d, 4)
}
