// uncomment next line once import assert enter stage 4
// import webTypes from 'vuetify/dist/json/web-types.json' assert { type: 'json' }

import { readFileSync } from 'fs'
import prettier from 'prettier'
const webTypes = JSON.parse(
  readFileSync('./node_modules/vuetify/dist/json/web-types.json')
)

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

function getDescription(obj) {
  return obj.description ? `/** ${obj.description} */\n` : ''
}

function getSlotPropType(type) {
  return type
    .replaceAll('eventName', 'eventName: string')
    .replaceAll(':"', ':')
    .replaceAll('",', ',')
    .replaceAll('"}', '}')
    .replace(/\/\/.*/, '')
    .replaceAll('):', ')=>')
    .replace(/(aria-[a-z]*):/g, '"$1":')
    .replaceAll('Function', '(...args: any[]) => any')
    .replaceAll('object', '{ [key: keyof any]: any }')
}

function getSlotName(name) {
  if (name === 'header.<name>') {
    return '[name:`header.${string}`]'
  } else if (name === 'item.<name>') {
    return '[name:`item.${string}`]'
  }
  return `'${name}'`
}

const types = webTypes.contributions.html.tags
  .map((vm) =>
    !blackList.includes(vm.name)
      ? vm.name +
        ': DefineComponent<{' +
        vm.attributes
          .map(
            (attr) =>
              getDescription(attr) +
              `${attr.name.replace(/-./g, (x) =>
                x[1].toUpperCase()
              )}?: ${getType(attr.value.type)}`
          )
          .join('\n') +
        '}' +
        (vm.slots?.length
          ? ',{$scopedSlots: Readonly<{\n' +
            vm.slots
              .map(
                (slot) =>
                  getDescription(slot) +
                  `${getSlotName(slot.name)}:${
                    slot['vue-properties']
                      ? '(args: {' +
                        slot['vue-properties']
                          .map(
                            (prop) =>
                              prop.name + ':' + getSlotPropType(prop.type)
                          )
                          .join('\n') +
                        '}) => VNode[]'
                      : 'undefined'
                  }`
              )
              .join('\n') +
            '}>}\n'
          : '') +
        '>'
      : ''
  )
  .join('\n')

prettier.resolveConfig('./.prettierrc').then((options) => {
  console.log(
    prettier.format(
      `
import type { DefineComponent, VNode } from '@vue/runtime-dom'
import type { DataTableHeader, DataOptions } from 'vuetify'
type eventHandler = Function

declare module '@vue/runtime-dom' {
  export interface GlobalComponents {
    ${types}
  }
}

export {}`,
      { ...options, parser: 'typescript' }
    )
  )
})
