module.exports = ({
  background,
  blue,
  comment,
  foreground,
  green,
  orange,
  red,
  yellow,
}) => [
  {
    'name': 'Global settings',
    'settings': {
      'background': background,
      'foreground': foreground
    }
  },
  {
    'name': 'Comment',
    'scope': 'comment',
    'settings': {
      'foreground': comment
    }
  },
  {
    'name': 'String',
    'scope': 'string',
    'settings': {
      'foreground': blue
    }
  },
  {
    'name': 'String Quoted',
    'scope': 'string.quoted',
    'settings': {
      'foreground': blue
    }
  },
  {
    'name': 'Support Constant Math',
    'scope': 'support.constant.math',
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'Number',
    'scope': [
      'constant.numeric',
      'constant.character.numeric'
    ],
    'settings': {
      'foreground': orange
    }
  },
  {
    'name': 'Built-in constant',
    'scope': [
      'constant.language',
      'punctuation.definition.constant',
      'variable.other.constant'
    ],
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'User-defined constant',
    'scope': [
      'constant.character',
      'constant.other'
    ],
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'Constant Character Escape',
    'scope': 'constant.character.escape',
    'settings': {
      'foreground': orange
    }
  },
  {
    'name': 'RegExp String',
    'scope': [
      'string.regexp',
      'string.regexp keyword.other'
    ],
    'settings': {
      'foreground': blue
    }
  },
  {
    'name': 'Comma in functions',
    'scope': 'meta.function punctuation.separator.comma',
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'Variable',
    'scope': 'variable',
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'Keyword',
    'scope': [
      'punctuation.accessor',
      'keyword'
    ],
    'settings': {
      'foreground': green
    }
  },
  {
    'name': 'Storage',
    'scope': 'storage',
    'settings': {
      'foreground': green
    }
  },
  {
    'name': 'Storage type',
    'scope': [
      'storage.type',
      'meta.var.expr storage.type',
      'meta.class meta.method.declaration meta.var.expr storage.type.js'
    ],
    'settings': {
      'foreground': red
    }
  },
  {
    'name': 'Class name',
    'scope': [
      'entity.name.class',
      'meta.class entity.name.type.class'
    ],
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'Inherited class',
    'scope': 'entity.other.inherited-class',
    'settings': {
      'foreground': blue
    }
  },
  {
    'name': 'Function name',
    'scope': 'entity.name.function',
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'Function Parameters',
    'scope': 'variable.parameter',
    'settings': {
      'foreground': blue
    }
  },
  {
    'name': 'Meta Tag',
    'scope': [
      'punctuation.definition.tag',
      'meta.tag'
    ],
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'HTML Tag names',
    'scope': [
      'support.class.component',
      'meta.tag.other.html',
      'meta.tag.other.js',
      'meta.tag.other.tsx',
      'meta.tag.js',
      'meta.tag.tsx',
      'meta.tag.html'
    ],
    'settings': {
      'foreground': red
    }
  },
  {
    'name': 'HTML Tag names',
    'scope': [
      'entity.name.tag.tsx',
      'entity.name.tag.js',
      'entity.name.tag',
    ],
    'settings': {
      'foreground': red
    }
  },
  {
    'name': 'Tag attribute',
    'scope': 'entity.other.attribute-name',
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'Entity Name Tag Custom',
    'scope': 'entity.name.tag.custom',
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'Library (function & constant)',
    'scope': [
      'support.function',
      'support.constant'
    ],
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'Support Constant Property Value meta',
    'scope': 'support.constant.meta.property-value',
    'settings': {
      'foreground': orange
    }
  },
  {
    'name': 'Library class/type',
    'scope': [
      'support.type',
      'support.class'
    ],
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'Support Variable DOM',
    'scope': 'support.variable.dom',
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'Invalid',
    'scope': 'invalid',
    'settings': {
      'background': red,
      'foreground': foreground
    }
  },
  {
    'name': 'Invalid deprecated',
    'scope': 'invalid.deprecated',
    'settings': {
      'foreground': foreground,
      'background': red,
    }
  },
  {
    'name': 'Keyword Operator',
    'scope': 'keyword.operator',
    'settings': {
      'foreground': green
    }
  },
  {
    'name': 'Keyword Operator Relational',
    'scope': 'keyword.operator.relational',
    'settings': {
      'foreground': green
    }
  },
  {
    'name': 'Keyword Operator Assignment',
    'scope': 'keyword.operator.assignment',
    'settings': {
      'foreground': green
    }
  },
  {
    'name': 'Double-Slashed Comment',
    'scope': 'comment.line.double-slash',
    'settings': {
      'foreground': comment
    }
  },
  {
    'name': 'Null',
    'scope': 'constant.language.null',
    'settings': {
      'foreground': orange
    }
  },
  {
    'name': 'Meta Brace',
    'scope': 'meta.brace',
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'Meta Delimiter Period',
    'scope': 'meta.delimiter.period',
    'settings': {
      'foreground': green
    }
  },
  {
    'name': 'Boolean',
    'scope': 'constant.language.boolean',
    'settings': {
      'foreground': orange
    }
  },
  {
    'name': 'Object Comma',
    'scope': 'object.comma',
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'Variable Parameter Function',
    'scope': 'variable.parameter.function',
    'settings': {
      'foreground': orange
    }
  },
  {
    'name': 'Support Type Property Name & entity name tags',
    'scope': [
      'support.type.vendored.property-name',
      'support.constant.vendored.property-value',
      'support.type.property-name',
      'meta.property-list entity.name.tag'
    ],
    'settings': {
      'foreground': blue
    }
  },
  {
    'name': 'Entity Name tag reference in stylesheets',
    'scope': 'meta.property-list entity.name.tag.reference',
    'settings': {
      'foreground': red
    }
  },
  {
    'name': 'Constant Other Color RGB Value Punctuation Definition Constant',
    'scope': 'constant.other.color.rgb-value punctuation.definition.constant',
    'settings': {
      'foreground': orange
    }
  },
  {
    'name': 'Constant Other Color',
    'scope': 'constant.other.color',
    'settings': {
      'foreground': green
    }
  },
  {
    'name': 'Keyword Other Unit',
    'scope': 'keyword.other.unit',
    'settings': {
      'foreground': green
    }
  },
  {
    'name': 'Meta Selector',
    'scope': 'meta.selector',
    'settings': {
      'foreground': green
    }
  },
  {
    'name': 'Entity Other Attribute Name Id',
    'scope': 'entity.other.attribute-name.id',
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'Meta Property Name',
    'scope': 'meta.property-name',
    'settings': {
      'foreground': blue
    }
  },
  {
    'name': 'Doctypes',
    'scope': [
      'entity.name.tag.doctype',
      'meta.tag.sgml.doctype'
    ],
    'settings': {
      'foreground': green
    }
  },
  {
    'name': 'Punctuation Definition Parameters',
    'scope': 'punctuation.definition.parameters',
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'Keyword Control Operator',
    'scope': 'keyword.control.operator',
    'settings': {
      'foreground': orange
    }
  },
  {
    'name': 'Keyword Operator Logical',
    'scope': 'keyword.operator.logical',
    'settings': {
      'foreground': green
    }
  },
  {
    'name': 'Variable Instances',
    'scope': [
      'variable.instance',
      'variable.other.instance',
      'variable.reaedwrite.instance',
      'variable.other.readwrite.instance'
    ],
    'settings': {
      'foreground': red
    }
  },
  {
    'name': 'Variable Property Other',
    'scope': [
      'variable.other.property',
      'variable.other.object.property'
    ],
    'settings': {
      'foreground': orange
    }
  },
  {
    'name': 'Entity Name Function',
    'scope': 'entity.name.function',
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'Keyword Operator Comparison',
    'scope': 'keyword.operator.comparison',
    'settings': {
      'foreground': green
    }
  },
  {
    'name': 'Support Constant, `new` keyword, Special Method Keyword',
    'scope': [
      'support.constant',
      'keyword.other.special-method',
      'keyword.other.new'
    ],
    'settings': {
      'foreground': orange
    }
  },
  {
    'name': 'Support Function',
    'scope': 'support.function',
    'settings': {
      'foreground': orange
    }
  },
  {
    'name': 'Invalid Broken',
    'scope': 'invalid.broken',
    'settings': {
      'background': red,
      'foreground': background,
    }
  },
  {
    'name': 'Invalid Unimplemented',
    'scope': 'invalid.unimplemented',
    'settings': {
      'background': orange,
      'foreground': foreground,
    }
  },
  {
    'name': 'Invalid Illegal',
    'scope': 'invalid.illegal',
    'settings': {
      'foreground': foreground,
      'background': red
    }
  },
  {
    'name': 'Language Variable',
    'scope': 'variable.language',
    'settings': {
      'foreground': red
    }
  },
  {
    'name': 'Support Variable Property',
    'scope': 'support.variable.property',
    'settings': {
      'foreground': orange
    }
  },
  {
    'name': 'Variable Function',
    'scope': 'variable.function',
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'Variable Interpolation',
    'scope': 'variable.interpolation',
    'settings': {
      'foreground': red
    }
  },
  {
    'name': 'Meta Function Call',
    'scope': 'meta.function-call',
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'Punctuation Section Embedded',
    'scope': 'punctuation.section.embedded',
    'settings': {
      'foreground': red
    }
  },
  {
    'name': 'Template Strings',
    'scope': 'string.template meta.template.expression',
    'settings': {
      'foreground': red
    }
  },
  {
    'name': 'Italics',
    'scope': 'italic',
    'settings': {
      'foreground': green,
      'fontStyle': 'italic'
    }
  },
  {
    'name': 'Bold',
    'scope': 'bold',
    'settings': {
      'foreground': yellow,
      'fontStyle': 'bold'
    }
  },
  {
    'name': 'Quote',
    'scope': 'quote',
    'settings': {
      'foreground': blue,
      'fontStyle': 'italic'
    }
  },
  {
    'name': 'Raw Code',
    'scope': 'raw',
    'settings': {
      'foreground': blue
    }
  },
  {
    'name': 'CoffeScript Variable Assignment',
    'scope': 'variable.assignment.coffee',
    'settings': {
      'foreground': orange
    }
  },
  {
    'name': 'CoffeScript Parameter Function',
    'scope': 'variable.parameter.function.coffee',
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'CoffeeScript Assignments',
    'scope': 'variable.assignment.coffee',
    'settings': {
      'foreground': orange
    }
  },
  {
    'name': 'C# Readwrite Variables',
    'scope': 'variable.other.readwrite.cs',
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'C# Classes & Storage types',
    'scope': [
      'entity.name.type.class.cs',
      'storage.type.cs'
    ],
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'C# Namespaces',
    'scope': 'entity.name.type.namespace.cs',
    'settings': {
      'foreground': green
    }
  },
  {
    'name': 'Tag names in Stylesheets',
    'scope': [
      'entity.name.tag.css',
      'entity.name.tag.less',
      'entity.name.tag.custom.css'
    ],
    'settings': {
      'foreground': red
    }
  },
  {
    'name': 'Wildcard(*) selector in Stylesheets',
    'scope': [
      'entity.name.tag.wildcard.css',
      'entity.name.tag.wildcard.less',
      'entity.name.tag.wildcard.scss',
      'entity.name.tag.wildcard.sass'
    ],
    'settings': {
      'foreground': red
    }
  },
  {
    'name': 'CSS Keyword Other Unit',
    'scope': 'keyword.other.unit.css',
    'settings': {
      'foreground': green
    }
  },
  {
    'name': 'Attribute Name for CSS',
    'scope': 'meta.attribute-selector.css entity.other.attribute-name.attribute',
    'settings': {
      'foreground': orange
    }
  },
  {
    'name': 'Elixir Classes',
    'scope': [
      'source.elixir support.type.elixir',
      'source.elixir meta.module.elixir entity.name.class.elixir'
    ],
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'Elixir Functions',
    'scope': 'source.elixir entity.name.function',
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'Elixir Constants',
    'scope': [
      'source.elixir constant.other.symbol.elixir',
      'source.elixir constant.other.keywords.elixir'
    ],
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'Elixir String Punctuations',
    'scope': 'source.elixir punctuation.definition.string',
    'settings': {
      'foreground': blue
    }
  },
  {
    'name': 'Elixir',
    'scope': [
      'source.elixir variable.other.readwrite.module.elixir',
      'source.elixir variable.other.readwrite.module.elixir punctuation.definition.variable.elixir'
    ],
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'Elixir Binary Punctuations',
    'scope': 'source.elixir .punctuation.binary.elixir',
    'settings': {
      'foreground': green
    }
  },
  {
    'name': 'Go Function Calls',
    'scope': 'source.go meta.function-call.go',
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'ID Attribute Name in HTML',
    'scope': 'entity.other.attribute-name.id.html',
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'HTML Punctuation Definition Tag',
    'scope': 'punctuation.definition.tag.html',
    'settings': {
      'foreground': orange
    }
  },
  {
    'name': 'HTML Doctype',
    'scope': 'meta.tag.sgml.doctype.html',
    'settings': {
      'foreground': green
    }
  },
  {
    'name': 'JavaScript Classes',
    'scope': 'meta.class entity.name.type.class.js',
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'JavaScript Method Declaration e.g. `constructor`',
    'scope': 'meta.method.declaration storage.type.js',
    'settings': {
      'foreground': yellow,
      'fontStyle': 'normal'
    }
  },
  {
    'name': 'JavaScript Terminator',
    'scope': 'terminator.js',
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'JavaScript Meta Punctuation Definition',
    'scope': 'meta.js punctuation.definition.js',
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'Entity Names in Code Documentations',
    'scope': [
      'entity.name.type.instance.jsdoc',
      'entity.name.type.instance.phpdoc'
    ],
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'Other Variables in Code Documentations',
    'scope': [
      'variable.other.jsdoc',
      'variable.other.phpdoc'
    ],
    'settings': {
      'foreground': blue
    }
  },
  {
    'name': 'JavaScript module import',
    'scope': [
      'variable.other.meta.import.js',
      'meta.import.js variable.other'
    ],
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'JavaScript Variable Parameter Function',
    'scope': 'variable.parameter.function.js',
    'settings': {
      'foreground': blue
    }
  },
  {
    'name': 'JavaScript Variable Other ReadWrite',
    'scope': 'variable.other.readwrite.js',
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'JavaScript[React] Variable Other Object',
    'scope': [
      'variable.other.object.js',
      'variable.other.object.jsx',
      'variable.object.property.js',
      'variable.object.property.jsx'
    ],
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'JavaScript Variables',
    'scope': [
      'variable.js',
      'variable.other.js'
    ],
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'JavaScript Entity Name Type',
    'scope': [
      'entity.name.type.js',
      'entity.name.type.module.js'
    ],
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'JavaScript Support Classes',
    'scope': 'support.class.js',
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'JSON Property Names',
    'scope': 'support.type.property-name.json',
    'settings': {
      'foreground': red
    }
  },
  {
    'name': 'JSON Support Constants',
    'scope': 'support.constant.json',
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'JSON Property values (string)',
    'scope': 'meta.structure.dictionary.value.json string.quoted.double',
    'settings': {
      'foreground': blue
    }
  },
  {
    'name': 'Strings in JSON values',
    'scope': 'string.quoted.double.json punctuation.definition.string.json',
    'settings': {
      'foreground': blue
    }
  },
  {
    'name': 'Specific JSON Property values like null',
    'scope': 'meta.structure.dictionary.json meta.structure.dictionary.value constant.language',
    'settings': {
      'foreground': orange
    }
  },
  {
    'name': 'Ruby Variables',
    'scope': 'variable.other.ruby',
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'Ruby Hashkeys',
    'scope': 'constant.language.symbol.hashkey.ruby',
    'settings': {
      'foreground': orange
    }
  },
  {
    'name': 'LESS Tag names',
    'scope': 'entity.name.tag.less',
    'settings': {
      'foreground': red
    }
  },
  {
    'name': 'LESS Keyword Other Unit',
    'scope': 'keyword.other.unit.css',
    'settings': {
      'foreground': green
    }
  },
  {
    'name': 'Attribute Name for LESS',
    'scope': 'meta.attribute-selector.less entity.other.attribute-name.attribute',
    'settings': {
      'foreground': orange
    }
  },
  {
    'name': 'Markdown Headings',
    'scope': 'markup.heading.markdown',
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'Markdown Italics',
    'scope': 'markup.italic.markdown',
    'settings': {
      'foreground': green,
      'fontStyle': 'italic'
    }
  },
  {
    'name': 'Markdown Bold',
    'scope': 'markup.bold.markdown',
    'settings': {
      'foreground': yellow,
      'fontStyle': 'bold'
    }
  },
  {
    'name': 'Markdown Quote + others',
    'scope': 'markup.quote.markdown',
    'settings': {
      'foreground': blue,
      'fontStyle': 'italic'
    }
  },
  {
    'name': 'Markdown Raw Code + others',
    'scope': 'markup.inline.raw.markdown',
    'settings': {
      'foreground': blue
    }
  },
  {
    'name': 'Markdown Links',
    'scope': [
      'markup.underline.link.markdown',
      'markup.underline.link.image.markdown'
    ],
    'settings': {
      'foreground': blue
    }
  },
  {
    'name': 'Markdown Link Title and Description',
    'scope': [
      'string.other.link.title.markdown',
      'string.other.link.description.markdown'
    ],
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'Markdown Punctuation',
    'scope': [
      'punctuation.definition.string.markdown',
      'punctuation.definition.string.begin.markdown',
      'punctuation.definition.string.end.markdown',
      'meta.link.inline.markdown punctuation.definition.string'
    ],
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'Markdown MetaData Punctuation',
    'scope': [
      'punctuation.definition.metadata.markdown'
    ],
    'settings': {
      'foreground': red
    }
  },
  {
    'name': 'Markdown List Punctuation',
    'scope': [
      'beginning.punctuation.definition.list.markdown'
    ],
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'Support Classes in PHP',
    'scope': 'support.class.php',
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'Punctuations in PHP function calls',
    'scope': 'meta.function-call.php punctuation',
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'PHP Global Variables',
    'scope': 'variable.other.global.php',
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'Declaration Punctuation in PHP Global Variables',
    'scope': 'variable.other.global.php punctuation.definition.variable',
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'Language Constants in Python',
    'scope': 'constant.language.python',
    'settings': {
      'foreground': orange
    }
  },
  {
    'name': 'Python Function Parameter and Arguments',
    'scope': [
      'variable.parameter.function.python',
      'meta.function-call.arguments.python'
    ],
    'settings': {
      'foreground': blue
    }
  },
  {
    'name': 'Punctuations in Python',
    'scope': 'punctuation.python',
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'Decorator Functions in Python',
    'scope': 'entity.name.function.decorator.python',
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'Variables in SASS At-Rules',
    'scope': [
      'source.css.scss meta.at-rule variable',
      'source.css.sass meta.at-rule variable'
    ],
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'Attribute Name for SASS',
    'scope': [
      'meta.attribute-selector.scss entity.other.attribute-name.attribute',
      'meta.attribute-selector.sass entity.other.attribute-name.attribute'
    ],
    'settings': {
      'foreground': orange
    }
  },
  {
    'name': 'Tag names in SASS',
    'scope': [
      'entity.name.tag.scss',
      'entity.name.tag.sass'
    ],
    'settings': {
      'foreground': red
    }
  },
  {
    'name': 'SASS Keyword Other Unit',
    'scope': [
      'keyword.other.unit.scss',
      'keyword.other.unit.sass'
    ],
    'settings': {
      'foreground': green
    }
  },
  {
    'name': 'TypeScript[React] Variables and Object Properties',
    'scope': [
      'variable.other.readwrite.alias.ts',
      'variable.other.readwrite.alias.tsx',
      'variable.other.readwrite.ts',
      'variable.other.readwrite.tsx',
      'variable.other.object.ts',
      'variable.other.object.tsx',
      'variable.object.property.ts',
      'variable.object.property.tsx',
      'variable.other.ts',
      'variable.other.tsx',
      'variable.tsx',
      'variable.ts'
    ],
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'TypeScript[React] Entity Name Types',
    'scope': [
      'entity.name.type.ts',
      'entity.name.type.tsx'
    ],
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'TypeScript[React] Node Classes',
    'scope': [
      'support.class.node.ts',
      'support.class.node.tsx'
    ],
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'TypeScript[React] Entity Name Types as Parameters',
    'scope': [
      'meta.type.parameters.ts entity.name.type',
      'meta.type.parameters.tsx entity.name.type'
    ],
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'TypeScript[React] Import Punctuations',
    'scope': [
      'meta.import.ts punctuation.definition.block',
      'meta.import.tsx punctuation.definition.block'
    ],
    'settings': {
      'foreground': foreground
    }
  },
  {
    'name': 'TypeScript[React] Punctuation Decorators',
    'scope': [
      'meta.decorator punctuation.decorator.ts',
      'meta.decorator punctuation.decorator.tsx'
    ],
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'TypeScript[React] Punctuation Decorators',
    'scope': [
      'meta.jsx.children.tsx',
      'meta.tag.js meta.jsx.children.tsx'
    ],
    'settings': {
      'foreground': yellow
    }
  },
  {
    'name': 'YAML Entity Name Tags',
    'scope': 'entity.name.tag.yaml',
    'settings': {
      'foreground': orange
    }
  },
  {
    'name': 'Normalize font style of certain Components',
    'scope': [
      'meta.property-list.css meta.property-value.css variable.other.less',
      'meta.property-list.scss variable.scss',
      'meta.property-list.sass variable.sass',
      'keyword.operator.logical',
      'keyword.operator.arithmetic',
      'keyword.operator.bitwise',
      'keyword.operator.increment',
      'keyword.operator.ternary',
      'keyword.operator.comparison',
      'keyword.operator.assignment',
      'keyword.operator.operator',
      'keyword.operator.or.regexp',
      'punctuation.definintion.string',
      'punctuation'
    ],
    'settings': {
      'fontStyle': 'normal'
    }
  },
  {
    'name': 'Italicsify certain tokens',
    'scope': [
      'meta.import.ts meta.block.ts variable.other.readwrite.alias.ts',
      'meta.import.tsx meta.block.tsx variable.other.readwrite.alias.tsx',
      'meta.import.js variable.other',
      'entity.name.function.ts',
      'entity.name.function.tsx',
      'support.type.primitive',
      'entity.name.tag.yaml',
      'meta.tag.sgml.doctype.html',
      'entity.name.tag.doctype',
      'meta.tag.sgml.doctype',
      'entity.other.attribute-name',
      'entity.name.tag.custom',
      'source.js.jsx keyword.control.flow.js',
      'support.type.property.css',
      'support.function.basic_functions',
      'variable.assignment.coffee',
      'support.function.basic_functions',
      'keyword.operator.expression.typeof',
      'keyword.operator.type.annotation',
      'assignment.coffee',
      'entity.name.type.ts',
      'support.constant.math',
      'meta.object-literal.key',
      'meta.var.expr storage.type',
      'text.html.markdown',
      'parameter',
      'string',
      'italic',
      'quote',
      'keyword',
      'storage',
      'language',
      'type .function',
      'type.function',
      'storage.type.class',
      'type.var',
      'meta.parameter',
      'variable.parameter',
      'meta.parameters',
      'keyword.control',
      'modifier',
      'this',
      'comment'
    ],
    'settings': {
      'fontStyle': 'italic'
    }
  }
  ]
