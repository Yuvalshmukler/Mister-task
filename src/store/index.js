import { createStore } from 'vuex'
import taskModule from './modules/task-module.js'
// create a store instance
const store = createStore({
    strict: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        taskModule,
    },
})

export default store
