const { writeFileSync } = require('fs')
const themes = require('./themes')
const getColors = require('./getColors')
const getTokenColors = require('./getTokenColors')
const palette = require('./palette')

const makeGetContent = theme =>
  useItalics => {
    const themeMeta = Object.assign(palette, theme)
    const colors = getColors(themeMeta)
    const tokenColors = getTokenColors(themeMeta, useItalics)

    const content = {
      colors,
      tokenColors,
    }

    return JSON.stringify(content, null, 2)
  }

const writeTheme = themeKey => {
  const theme = themes[themeKey]
  const getContent = makeGetContent(theme)
  const normal = getContent(false)
  const italic = getContent(true)

  writeFileSync(`./themes/${themeKey}.json`, normal)
  writeFileSync(`./themes/${themeKey}Italic.json`, italic)
}

writeTheme('AnOldHope')
