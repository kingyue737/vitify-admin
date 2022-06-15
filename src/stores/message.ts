import { defineStore } from 'pinia'

interface Message {
  show: boolean
  type: 'info' | 'error' | 'success' | 'warning'
  text: string
  time: Date
  id: number
}

export const useMessageStore = defineStore('message', {
  state: () => {
    const messages: Message[] = []
    return {
      messages,
      messageCount: 0,
    }
  },
  actions: {
    addMessage(text: string, type: Message['type'] = 'info') {
      this.messages.push({
        id: this.messageCount++,
        text: text,
        type: type,
        time: new Date(),
        show: true,
      })
    },
    delMessage(id: number) {
      const index = this.messages.findIndex((m) => m.id === id)
      if (index !== -1) {
        this.messages.splice(index, 1)
      }
    },
  },
})

export const Message = {
  info: (text: string) => useMessageStore().addMessage(text, 'info'),
  success: (text: string) => useMessageStore().addMessage(text, 'success'),
  warning: (text: string) => useMessageStore().addMessage(text, 'warning'),
  error: (val: any) => {
    let text = ''
    if (typeof val === 'string') {
      text = val
    } else if (val instanceof Error) {
      text = val.message
    } else {
      text = JSON.stringify(val)
    }
    useMessageStore().addMessage(text, 'error')
  },
}
