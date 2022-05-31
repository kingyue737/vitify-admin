import webTypes from 'vuetify/dist/json/web-types.json' assert { type: 'json' }

const blackList = ['VFlex', 'VLayout'] // Components not to define in global

function convertType(typeStr) {
  switch (typeStr) {
    case 'array':
      return 'any[]'
    case 'function':
      return 'Function'
    case 'date':
      return 'Date'
    case 'regexp':
      return 'RegExp'
    default:
      return typeStr
  }
}

function getType(attrType) {
  if (typeof attrType === 'string') {
    return convertType(attrType)
  } else {
    return attrType.map((str) => convertType(str)).join('|')
  }
}

const types = webTypes.contributions.html.tags
  .map((vm) =>
    !blackList.includes(vm.name)
      ? vm.name +
        ': DefineComponent<{' +
        vm.attributes
          .map(
            (attr) =>
              (attr.description ? `/** ${attr.description} */\n` : '') +
              `${attr.name.replace(/-./g, (x) =>
                x[1].toUpperCase()
              )}?: ${getType(attr.value.type)}`
          )
          .join('\n') +
        '}>'
      : ''
  )
  .join('\n')

console.log(`
import type { DefineComponent } from '@vue/runtime-dom'
import type { DataTableHeader, DataOptions } from 'vuetify'

declare module '@vue/runtime-dom' {
  export interface GlobalComponents {
    ${types}
  }
}
  
export {}`)
