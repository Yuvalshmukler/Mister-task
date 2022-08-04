<template>
    <div class="list-container" v-if="tasks">
        <ul class="cards clean-list">
            <task-preview @removeTask="onRemoveTask" v-for="task in tasks" :task="task" :key="task._id" />
        </ul>
    </div>
</template>
<script>

import taskPreview from '@/components/task-preview.vue'
export default {
    props: {
        tasks: {
            type: Array,
            required: true,
        },
    },
    components: {
        taskPreview,
    },
    methods: {
        onRemoveTask(taskId) {
            this.$emit('removeTask', taskId)
        },
    },
}

</script>
