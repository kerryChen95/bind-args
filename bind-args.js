module.exports = bindArgs

function bindArgs (func) {
  var slice = [].slice
  var boundArgs = slice.call(arguments, 1)
  return function () {
    var args = slice.call(arguments)
    func.apply(this, boundArgs.concat(args))
  }
}
