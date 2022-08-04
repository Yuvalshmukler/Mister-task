<template>
    <section v-if="taskToEdit" class="edit-container main-layout">
    
        <form action="">
            <input type="text" placeholder="add title" v-model="taskToEdit.title">
            <input type="text" placeholder="add description" v-model="taskToEdit.description">
            
        </form>
        <button @click="goBack">Go back</button>
    </section>
</template>

<script>
import { taskService } from '../services/task-service'
export default {
    name: 'task-edit',
    data() {
        return {
            taskToEdit: null,
            id: null,
        }
    },
    async created() {
        try {
            const { id } = this.$route.params
            console.log('id', id);
            if (id) {
                const task = await taskService.getById(id)
                this.taskToEdit = task
                this.id = id
            } else this.taskToEdit = taskService.getEmptyTask()
        } catch {
            console.log('cannot get task', err);
        }
    },
    methods: {
        goBack() {
            this.$router.push('/task')
        },
        async saveTask() {
            try {
                this.$store.dispatch({ type: 'saveTask', task: { ...this.taskToEdit } })
                this.$router.push('/task')
            } catch (err) {
                console.log('Cannot get task by id', err)
            }
        },
    },
    computed: {
        labels() {
            return this.$store.getters.labels
        }
    }
}
</script>


