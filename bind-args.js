const bindArgs = (func, ...params) => func.bind(this, ...params)

module.exports = bindArgs
