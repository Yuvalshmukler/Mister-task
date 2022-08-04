<template>
  <section class="Main-app">
    <router-View />
  </section>
</template>

<script>

/* import appHeader from '@/components/app-header.vue'
import appFooter from '@/components/app-footer.vue'
 */

export default {
  name: 'app',
  created() {
    this.$store.dispatch({ type: 'loadTasks' })
  },
  components: {
  }
}
</script>





