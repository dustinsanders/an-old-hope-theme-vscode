const { writeFileSync } = require('fs')
const { AnOldHope } = require('./themes')
const getColors = require('./getColors')
const getTokenColors = require('./getTokenColors')
const palette = require('./palette')

const themeMeta = Object.assign(palette, AnOldHope)
const colors = getColors(themeMeta)
const tokenColors = getTokenColors(themeMeta)

const content = {
  colors,
  tokenColors,
}

writeFileSync('./AnOldHope.json', JSON.stringify(content))
