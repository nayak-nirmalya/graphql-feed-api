const path = require('path')
const fs = require('fs')

const clearImage = (filePath) => {
  filePath = path.join(__dirname, '..', 'images', filePath)
  fs.unlink(filePath, (err) => console.error('Deleted!'))
}

exports.clearImage = clearImage
