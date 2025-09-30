<template>
  <div class="flex flex-wrap">
    <div v-for="item in props.data" :key="item.id" class="m-6px w-47%">
      <v-card>
        <v-card-title class="wrap-title">
          {{ item.title }}
        </v-card-title>
        <v-card-subtitle>
          <v-row>
            <v-col cols="12">
              创建时间：{{ item.createdAt }}
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              目标完成：{{ item.targetAt }}
            </v-col>
          </v-row>
        </v-card-subtitle>
        <v-card-actions>
          <v-row>
            <v-col cols="1" offset="6">
              <v-btn density="compact" variant="outlined">详情</v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { MileStoneItem } from '@/types/MileStoneItem'
  const props = defineProps({
    data: {
      type: Array as PropType<MileStoneItem[]>,
      default: () => [],
      required: false,
    },
  })
</script>
<style scoped>
.wrap-title {
  white-space: normal;
  overflow: visible;
  text-overflow: initial;
  word-break: break-word;
}
</style>
