<template>
    <section>
        <li class="task-preview">
            <h2>{{ task.title }}</h2>
            <p>{{ task.description }}</p>
            <span>{{ task.importance }}</span>
            <p>{{ task.createdAt }}</p>
        </li>
        <button @click="removeTask(task.id)">Remove</button>
        <button>Update</button>
    </section>
</template>

<script>

export default {
    name: 'task-preview',
    props: {
        task: Object,
    },
    components: {
    },
    methods: {
        goToEdit() {
            this.$router.push(`/task/edit/${this.task._id}`)
        },
        removeTask(taskId) {
            console.log('iddd', taskId);
            this.$emit('removeTask', taskId)
        },
    },
    computed: {

    }

}
</script>
