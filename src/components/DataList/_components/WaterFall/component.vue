<template>
  <div :key="masonryKey" ref="masonryRef" v-masonry>
    <Item
      v-for="item in props.data"
      :key="item.id || item.title"
      v-masonry-tile
      class="w-50%"
      :data="item"
    />
  </div>
</template>

<script lang="ts" setup>
  import { nextTick } from 'vue'
  import Item from './_components/item.vue'

  const props = defineProps({
    data: {
      type: Array,
      required: true,
    },
  })

  const masonryRef = ref<HTMLElement | null>(null)

  // 使用数据长度和第一个元素的 id 作为 key，确保数据变化时重新渲染
  const masonryKey = computed(() => {
    if (props.data.length === 0) return 0
    return `${props.data.length}-${props.data[0]?.id || props.data[0]?.title || ''}`
  })

  // 监听数据变化，触发重新布局
  watch(() => props.data, async () => {
    await nextTick()
    // 触发 window resize 事件，让 masonry 重新计算布局
    window.dispatchEvent(new Event('resize'))
  }, { deep: true, immediate: false })
</script>
