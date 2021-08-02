const fs = require('fs')
const path = require('path')
let modules = {}

fs.readdirSync(__dirname).forEach(file => {
  if (file !== 'index.js' && (file.endsWith('.js') || file.endsWith('.ts'))) {
    let key = file.replace('.js', '').replace('.ts', '')
    const Controller = require(path.join(__dirname, key))
    modules[key.replace('Controller', '')] = Controller
  }
})

module.exports = modules
