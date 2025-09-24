<template>
  <div v-masonry>
    <Item
      v-for="item in listData"
      :key="item.title"
      v-masonry-tile
      class="w-50%"
      :data="item"
    />
  </div>
</template>

<script lang="ts" setup>
  import type { TaskItem } from '../../type'
  import Item from './_components/item.vue'
  const listData = inject('listData') as Array<TaskItem>
</script>
