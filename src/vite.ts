import { createHash } from 'crypto'
import { Plugin } from 'vite'
import { MiniwindRule } from './types'
import { createGenerator, defaultRules } from '.'
import * as fs from "fs";

function appendLog(title: string, str: object) {
  console.log(title, str)
  // fs.appendFileSync('./t.log', `[${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}:${new Date().getMilliseconds()}] ${title} \n ${JSON.stringify(str)}\n\n` )
}

function getHash(input: string, length = 8) {
  return createHash('sha256')
    .update(input)
    .digest('hex')
    .substr(0, length)
}

const VIRTUAL_PREFIX = '/@virtual/miniwind/'

export default function MiniwindVitePlugin(rules: MiniwindRule[] = defaultRules): Plugin {
  const generate = createGenerator(rules)
  const map = new Map<string, [string, string]>()

  return {
    name: 'miniwind',
    enforce: 'post',
    options(options){
      appendLog('options', {options})
      return options
    },
    buildStart(options) {
      appendLog('buildStart', {options})
    },
    buildEnd(err) {
      appendLog('buildEnd', {err})
    },
    transform(code, id) {
      appendLog( 'transform', { id})

      if (id.endsWith('.css'))
        return null

      const style = generate(code)
      if (!style)
        return null

      const hash = getHash(id)
      map.set(hash, [id, style])
      appendLog( 'transform:end', {id, style, code})

      return `import "${VIRTUAL_PREFIX}${hash}.css";${code}`
    },
    resolveId(id) {
      appendLog( 'resolveId', { id})
      return id.startsWith(VIRTUAL_PREFIX) ? id : null
    },
    load(id) {
      appendLog( 'load', { id})
      if (!id.startsWith(VIRTUAL_PREFIX))
        return null

      const hash = id.slice(VIRTUAL_PREFIX.length, -'.css'.length)

      const [source, css] = map.get(hash) || []

      // if (source)
      //   this.addWatchFile(source)

      return css
    },
  }
}
