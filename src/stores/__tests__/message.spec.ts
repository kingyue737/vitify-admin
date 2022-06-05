describe('Message Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('Add and delete message', () => {
    const store = useMessageStore()
    store.addMessage('随便')
    expect(store.messageCount).toBe(1)
    store.delMessage(0)
    expect(store.messages.length).toBe(0)
  })

  it('Message utils', () => {
    const store = useMessageStore()
    Message.error('错误信息')
    const message = store.messages.at(-1)
    expect(message!.text).toBe('错误信息')
    expect(message!.type).toBe('error')
  })
})

export {}
