import { readFileSync } from 'fs'
import { format, resolveConfig } from 'prettier'

const webTypes = JSON.parse(
  readFileSync('./node_modules/vuetify/dist/json/web-types.json'),
)

const tags = webTypes.contributions.html.tags

// https://github.com/vuetifyjs/vuetify/pull/18307
// Remove it after Vuetify 2.7.2 released
tags
  .find((component) => component.name === 'VDialog')
  .slots[0]['vue-properties'].push({
    name: 'attrs',
    type: '{ role: string, aria-haspopup: boolean, aria-expanded: string }',
  })

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
    case 'event':
      return 'Event'
    default:
      return typeStr
  }
}

function getPropType(attr) {
  const attrType = attr.value.type
  if (attr.name == 'rules' && attr.description?.includes('error message')) {
    return 'InputValidationRules'
  }
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
    .replace(/ = \w*/g, '') // remove default values
    .replaceAll('function', 'Function')
    .replaceAll('Function', '(...args: any[]) => any')
    .replaceAll('object', '{ [key: keyof any]: any }')
    .replaceAll('?boolean', 'boolean | undefined')
}

function getSlotName(name) {
  if (name === 'header.<name>') {
    return '[name:`header.${string}`]'
  } else if (name === 'item.<name>') {
    return '[name:`item.${string}`]'
  } else if (
    name.startsWith('item.data-table') ||
    name.startsWith('header.data-table')
  ) {
    // Ts doesn't allow overriding template literals with more specific keys/values.
    return `//@ts-expect-error\n '${name}'`
  }
  return `'${name}'`
}

function splitByComma(str) {
  const result = []
  let current = ''
  let level = 0
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (char === '{') {
      level++
    }
    if (char === '}') {
      level--
    }
    if (char === ',' && level === 0) {
      result.push(current)
      current = ''
    } else {
      current += char
    }
  }
  result.push(current)
  return result
}

function getEventArguments(args) {
  const _args = args
    .replaceAll(':"', ':')
    .replaceAll('",', ',')
    .replaceAll('"}', '}')
    .replaceAll('):', ')=>')
    .replace(/ = \w*/g, '') // remove default values
    .replaceAll('ClickEvent', 'MouseEvent')

  // event may have multiple arguments
  const matches = splitByComma(_args)
    .map((a, i) => `arg${i}:${convertType(a)}`)
    .join(',')
  return matches
}

function getEventName(name) {
  if (name === '<event>:row') {
    return '[name:`${string}:row`]'
  } else if (name.startsWith('click:row')) {
    // Ts doesn't allow overriding template literals with more specific keys/values.
    return `//@ts-expect-error\n '${name}'`
  }
  return `'${name}'`
}

const types = tags
  .filter((vm) => !blackList.includes(vm.name))
  .map(
    (vm) =>
      vm.name +
      ': DefineComponent<{' +
      // Prop types:
      vm.attributes
        .map(
          (attr) =>
            getDescription(attr) +
            `${attr.name.replace(/-./g, (x) =>
              x[1].toUpperCase(),
            )}?: ${getPropType(attr)} | null`,
        )
        .join('\n') +
      '}' +
      // Slot types:
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
                            prop.name + ':' + getSlotPropType(prop.type),
                        )
                        .join('\n') +
                      '}) => VNode[]'
                    : 'undefined'
                }`,
            )
            .join('\n') +
          '}>}\n'
        : ',{}') +
      // Event types:
      (vm.events?.length
        ? ',{},{},{},{},{},{\n' +
          vm.events
            .map(
              (event) =>
                getDescription(event) +
                `${getEventName(event.name)}:(${getEventArguments(
                  event.arguments[0].type,
                )})=>void`,
            )
            .join('\n') +
          '}'
        : '') +
      '>',
  )
  .join('\n\n')

resolveConfig('./.prettierrc').then((options) => {
  format(
    `
    import type { DataTableHeader, DataOptions, CalendarTimestamp as VTimestamp } from 'vuetify'
    import type VueComponent from "vue"
    import type { DefineComponent, VNode } from "vue"
    type eventHandler = Function
    interface srcObject {
      src: string
      srcset?: string
      lazySrc: string
      aspect: number
    }


    export type InputValidationRule = (value: any) => string | boolean
    // We define our own InputValidationRules because vuetify incorrectly does not include
    // boolean as a valid array member in its definition of InputValidationRules.
    export type InputValidationRules = (InputValidationRule | string | boolean)[]

    declare module 'vue' {
      export interface GlobalComponents {
        ${types}
      }
    }

    export {}`,
    { ...options, parser: 'typescript' },
  ).then((v) => console.log(v))
})
