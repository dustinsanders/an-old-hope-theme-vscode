const { writeFileSync } = require('fs')
const { AnOldHope } = require('./themes')
const getColors = require('./getColors')
const getTokenColors = require('./getTokenColors')
const palette = require('./palette')

const test = Object.assign(palette, AnOldHope)
const colors = getColors(test)
const tokenColors = getTokenColors(test)

const content = {
  colors,
  tokenColors,
}

writeFileSync('./AnOldHope.json', JSON.stringify(content))
