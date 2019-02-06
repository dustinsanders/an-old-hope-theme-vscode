const { execSync } = require('child_process')
const { name, version} = require('./package.json')

const vsix = `${name}-${version}.vsix`

const commands = [
  'npm run build',
  'vsce package',
  `code --install-extension ${vsix}`,
]

commands.map(
  command => execSync(command, { stdio: 'inherit' })
)
