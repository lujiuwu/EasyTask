<template>
  <use-draggable
    class="draggable-button add-tasks"
    :initial-value="props.initialPosition as any"
  >
    <v-btn
      color="primary"
      :icon="props.icon"
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
    icon: {
      type: String,
      required: true,
    },
    initialPosition: {
      type: Object,
      default: () => ({ x: window.innerWidth - 60, y: window.innerHeight - 120 }),
    },
  })
  const router = useRouter()
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
