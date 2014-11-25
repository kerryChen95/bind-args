module.exports = bindArgs

function bindArgs (func) {
  var boundArgs = [].slice.call(arguments, 1)
  return function () {
    func.apply(this, boundArgs.concat(arguments))
  }
}
