import { createRouter, createWebHistory } from 'vue-router'
import taskApp from '../views/task-app.vue'
import taskEdit from '../views/task-edit.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'task',
      component: taskApp
    },
    {
      path: '/task/edit/:id?',
      name: 'task-edit',
      component: taskEdit
    },

  ]
})

export default router
