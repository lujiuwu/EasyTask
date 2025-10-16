<template>
  <use-draggable
    class="draggable-button star-book"
    :initial-value="initialPosition"
  >
    <v-btn
      color="primary"
      icon="mdi-star-box-multiple-outline"
      @click="handleStar"
    />
  </use-draggable>
</template>
<script lang="ts" setup>
  import { UseDraggable } from '@vueuse/components'
  import { useRouter } from 'vue-router'

  const props = defineProps({
    to: {
      type: String,
      required: true,
    },
  })

  const router = useRouter()
  const initialPosition = { x: window.innerWidth - 60, y: window.innerHeight - 200 }

  function handleStar () {
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
