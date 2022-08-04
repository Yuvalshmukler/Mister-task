<template>
    <section class="main-layout">
        <h1>These are your tasks for today :)</h1>
        <task-list v-if="tasks" @removeTask="onRemoveTask" :tasks="tasks"></task-list>
        <button class="add-btn" @click="goToEdit">Add Task</button>
    </section>
</template>

<script>
import taskList from '../components/task-list.vue'
export default {
    name: 'task-app',
    created() {
    },
    data() {
        return {
        }
    },
    computed: {
        tasks() {
            return this.$store.getters.tasks
        }
    },
    methods: {
        goToEdit() {
            this.$router.push('/task/edit')
        },
        onRemoveTask(taskId) {
            this.$store.dispatch({ type: 'removeTask', id: taskId })
        },


    },
    components: {
        taskList
    },
}
</script>
