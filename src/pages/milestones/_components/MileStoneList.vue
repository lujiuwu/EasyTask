<template>
  <v-list>
    <v-list-item v-for="item in props.data" :key="item.id" :data="item">
      <v-list-item-title>{{ item.title }}</v-list-item-title>
      <v-list-item-subtitle>{{ t('pages.milestones.item.table.id') }}：{{ item.id }}</v-list-item-subtitle>
      <v-card>
        <v-card-text>
          <v-table class="border-sm mb-10px" density="compact" striped="even">
            <tbody>
              <tr>
                <td class="border-e-sm">{{ t('pages.milestones.item.table.create-time') }}</td>
                <td>{{ item.createdAt }}</td>
              </tr>
              <tr>
                <td class="border-e-sm">{{ t('pages.milestones.item.detail.start-at') }}</td>
                <td>{{ item.startAt }}</td>
              </tr>
              <tr>
                <td class="border-e-sm">{{ t('pages.milestones.item.table.target-at') }}</td>
                <td>{{ item.targetAt }}</td>
              </tr>
              <tr>
                <td class="border-e-sm">{{ t('pages.milestones.item.table.mark') }}</td>
                <td>{{ item.mark }}</td>
              </tr>
              <tr>
                <td class="border-e-sm">{{ t('pages.milestones.item.table.description') }}</td>
                <td>{{ item.description }}</td>
              </tr>
            </tbody>
          </v-table>
          <v-row>
            <v-col cols="12" density="comfortable">
              <v-btn color="shades" density="comfortable" variant="tonal" @click="$router.push(`/milestones/${item.id}`)">
                {{ t('pages.milestones.item.detail.title') }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-list-item>
  </v-list>
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
