import { taskService } from '../../services/task-service.js'

export default {
    state: {
        tasks: null,
    },
    getters: {
        tasks(state) {
            return state.tasks
        }
    },
    mutations: {
        setTasks(state, { tasks }) {
            state.tasks = tasks
        },
        updateTask(state, { task }) {
            const idx = state.tasks.findIndex((currTask) => currTask.id === task.id)
            if (idx !== -1) state.tasks.splice(idx, 1, task)
            else console.log('No such task');
        },
        addTask(state, { task }) {
            state.tasks.push(task)
        },
        removeTask(state, { id }) {
            const idx = state.tasks.findIndex((task) => task.id === id)
            state.tasks.splice(idx, 1)
        },
    },
    actions: {
        loadTasks: async ({ commit }, { filterBy }) => {
            try {
                const tasks = await taskService.query()
                commit({ type: 'setTasks', tasks })
            } catch (err) {
                console.log('Had error getting a user', err)
            }
        },
        saveTask: async ({ commit }, { task }) => {
            try {
                const newTask = await taskService.save(task)
                if (task.id) commit({ type: 'updateTask', task: newTask })
                else {
                    commit({ type: 'addTask', task: newTask })
                }
            } catch (err) {
                console.log('Cannot save task', err)
            }
        },
        removeTask: async ({ commit }, { id }) => {
            try {
                const taskId = await taskService.remove(id)
                commit({ type: 'removeTask', id: taskId })
            } catch (err) {
                console.log('Had error getting a user', err)
            }
        },

    }
}
