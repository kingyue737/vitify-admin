import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      drawer: true,
      drawerImage: '占位',
      drawerImageShow: true,
    }
  },
})
