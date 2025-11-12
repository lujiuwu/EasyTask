<template>
  <v-timeline side="end">
    <v-timeline-item
      v-for="item in props.data"
      :key="item.date"
      :dot-color="item.color"
      :icon="item.icon"
      size="small"
    >
      <v-card :class="`bg-${item.color}`">
        <v-card-title>
          {{ item.title }}
        </v-card-title>
        <v-card-text>
          {{ item.description }}
          {{ item.date }}
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>
<script lang="ts" setup>
  import type { PropType } from 'vue'

  interface TimelineItem {
    title: string
    description: string
    date: string
    color: string
    icon: string
  }

  const props = defineProps({
    data: {
      type: Array as PropType<TimelineItem[]>,
      required: true,
    },
  })
</script>
<style scoped lang="scss">
 :deep(.v-timeline-item .v-timeline-item__body) {
  min-width: 350px;
  padding-left: 5px!important;
 }
 :deep(.v-timeline-item .v-timeline-item__opposite) {
  display: none;
 }
</style>
