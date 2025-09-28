<template>
  <div>
    <v-list v-if="props.data?.content?.length > 0" class="bg-transparent">
      <v-list-item
        v-for="(item, index) in props.data?.content || []"
        :key="item.key"
        color="primary"
        style="border-bottom: 1px dashed #ccc;"
      >
        <FinishDialog :index="index" :item="item" />
      </v-list-item>
    </v-list>
    <v-empty-state
      v-else
      headline="暂无内容"
      text="该任务没有子项"
      title="Data Not Found"
    />
  </div>
</template>

<script lang="ts" setup>
  import { FinishDialog } from '@/components/FinishDialog'
  const props = defineProps({
    data: {
      type: Object,
    },
  })
</script>
<style scoped lang="scss">
  :deep(.v-list-item) {
    padding-inline: 10px !important;
  }
</style>
