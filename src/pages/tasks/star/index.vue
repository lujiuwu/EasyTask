<template>
  <v-card>
    <v-card-title>
      {{ t('pages.tasks.star.title') }}
    </v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item v-for="item in items" :key="item.id">
          <v-list-item-title>
            {{ item.tasksId }}. {{ item.starName }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ item.starTime }}
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
  import type { StarItem } from '@/types/StarItem'
  import { ref } from 'vue'
  import { useI18n } from '@/composables/useI18n'
  const { t } = useI18n()
  const items = ref<StarItem[]>([
    {
      id: '1',
      starName: 'Star 1',
      tasksId: '1',
      starTime: '2021-01-01',
    },
    {
      id: '2',
      starName: 'Star 2',
      tasksId: '2',
      starTime: '2021-01-02',
    },
  ])
</script>

<style scoped>
</style>
