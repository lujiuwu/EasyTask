<template>
  <div class="flex flex-wrap">
    <div v-for="item in props.data" :key="item.id" class="m-6px w-47%">
      <v-card>
        <v-card-title class="wrap-title font-size-18px!">
          {{ item.title }}
        </v-card-title>
        <v-card-subtitle>
          {{ t('pages.milestones.item.detail.start-at') }}：{{ item.startAt }}
        </v-card-subtitle>
        <v-card-subtitle>
          {{ t('pages.milestones.item.detail.target-at') }}：{{ item.targetAt }}
        </v-card-subtitle>
        <v-card-actions>
          <v-row>
            <v-col cols="1" offset="6">
              <v-btn
                color="shades"
                density="comfortable"
                variant="tonal"
                @click="$router.push(`/milestones/${item.id}`)"
              >
                {{ t('pages.milestones.item.detail.title') }}
              </v-btn>
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
