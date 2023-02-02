import { defineStore } from 'pinia'

export const useStore = defineStore('storeId', {
    id: 'language',
    state: () => {
        return {
            currentLanguage: 'zh',
        }
    },
    // 开启数据缓存
    persist: {
        enabled: true,
        strategies: [
            {
                storage: localStorage,
            }
        ]
    },
    getters:{},
    actions:{}
})
