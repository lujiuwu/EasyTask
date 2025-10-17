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
              {{ t('pages.milestones.item.table.create-time') }}：{{ item.createdAt }}
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              {{ t('pages.milestones.item.table.target-at') }}：{{ item.targetAt }}
            </v-col>
          </v-row>
        </v-card-subtitle>
        <v-card-actions>
          <v-row>
            <v-col cols="1" offset="6">
              <v-btn density="compact" variant="outlined" @click="$router.push(`/milestones/${item.id}`)">{{ t('pages.milestones.item.detail') }}</v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { MileStoneItem } from '@/types/MileStoneItem'
  import { useI18n } from '@/composables/useI18n'
  const { t } = useI18n()
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
