<template>
  <div class="my-date-picker">
    <Header />
    <Main :tasks="props.tasks" />
  </div>
</template>

<script lang="ts" setup>
  import type { PropType } from 'vue'

  import type { TaskItem } from '@/types/TaskItem'
  import Header from './Header.vue'
  import Main from './Main.vue'

  const props = defineProps({
    tasks: {
      type: Array as PropType<TaskItem[]>,
      default: () => [
        {
          title: 'Task 1',
          id: '1',
          createTime: '2025-11-01 12:00:00',
        },
        {
          title: 'Task 2',
          id: '2',
          createTime: '2025-11-10 12:00:00',
        },
      ],
    },
  })

</script>
<style scope lang="scss">
.my-date-picker {
  width: 100%;
  height: calc(100vh - 400px);
}
</style>
