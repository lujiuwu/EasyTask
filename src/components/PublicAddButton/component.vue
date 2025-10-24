<template>
  <use-draggable
    class="draggable-button add-tasks"
    :initial-value="initialPosition"
  >
    <v-btn
      color="primary"
      icon="mdi-plus"
      @click="handleAddTask"
    />
  </use-draggable>
</template>
<script lang="ts" setup>
  import { UseDraggable } from '@vueuse/components'
  const props = defineProps({
    to: {
      type: String,
      required: true,
    },
  })
  const router = useRouter()
  const initialPosition = { x: window.innerWidth - 60, y: window.innerHeight - 120 }

  function handleAddTask () {
    router.push(props.to)
  }
</script>

<style lang="scss" scoped>
.draggable-button {
  position: fixed;
  z-index: 1000;
  cursor: move;
}
</style>
