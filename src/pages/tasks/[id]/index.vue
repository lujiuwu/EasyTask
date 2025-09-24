<template>
  <div class="p-20px">
    <v-card>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-subtitle>任务ID: {{ id }}</v-card-subtitle>
      <v-card-text>
        <v-list>
          <v-list-item
            v-for="item in content"
            :key="item.key"
          >
            {{ item.text }}
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>
<script lang="ts" setup>
  import _ from 'lodash'
  import { useRoute } from 'vue-router'
  import { listData } from '@/components/DataList/constants'
  const route = useRoute()
  const id = _.toNumber((route.params as { id: string }).id)
  const { title, content } = _.find(listData, item => item.id === id)

</script>
