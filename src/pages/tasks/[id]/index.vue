<template>
  <div class="p-20px">
    <v-card>
      <v-card-title>{{ data?.title }}</v-card-title>
      <v-card-subtitle>任务ID: {{ data?.id }}</v-card-subtitle>
      <v-card-text>
        <PublicContent v-if="data" :data="data" />
        <div v-else>
          任务未找到
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>
<script lang="ts" setup>
  import _ from 'lodash'
  import { useRoute } from 'vue-router'
  import { PublicContent } from '@/components/DataList/_components/PublicContent'
  import { useAppStore } from '@/stores/app'
  const appStore = useAppStore()
  const listData = appStore.listData

  const route = useRoute()
  const id = _.toNumber((route.params as { id: string }).id)
  const data = _.find(listData, item => item.id === id)

</script>
