<template>
  <div v-masonry>
    <Item
      v-for="item in props.data"
      :key="item.title"
      v-masonry-tile
      class="w-50%"
      :data="item"
    />
  </div>
</template>

<script lang="ts" setup>
  import Item from './_components/item.vue'
  const props = defineProps({
    data: {
      type: Array,
      required: true,
    },
  })
</script>
