describe('Message Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('Add and delete message', () => {
    const store = useMessageStore()
    store.addMessage('A message!')
    expect(store.messageCount).toBe(1)
    store.delMessage(0)
    expect(store.messages.length).toBe(0)
  })

  it('Message utils', () => {
    const store = useMessageStore()
    Message.error('Error message')
    const message = store.messages.at(-1)
    expect(message!.text).toBe('Error message')
    expect(message!.type).toBe('error')
  })
})

export {}
