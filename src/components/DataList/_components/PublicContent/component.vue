<template>
  <v-list class="bg-transparent">
    <v-list-item
      v-for="(item, index) in props.data.content"
      :key="item.key"
      color="primary"
      style="border-bottom: 1px dashed #ccc;"
    >
      <FinishDialog :index="index" :item="item" />
    </v-list-item>
  </v-list>
</template>

<script lang="ts" setup>
  import { FinishDialog } from '@/components/FinishDialog'
  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
  })
</script>
<style scoped lang="scss">
  :deep(.v-list-item) {
    padding-inline: 10px !important;
  }
</style>
