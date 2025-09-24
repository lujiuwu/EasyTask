<template>
  <v-list>
    <v-list-item v-for="item in data" :key="item.title" v-model="activePanels" class="mb-4">
      <v-expansion-panels variant="popout">
        <v-expansion-panel :eager="true">
          <v-expansion-panel-title style="font-weight: bold;">
            {{ item.title }}
            <template #actions>
              <v-icon>mdi-chevron-down</v-icon>
            </template>
          </v-expansion-panel-title>
          <v-expansion-panel-text
            class="bg-grey-lighten-4"
            style="cursor:pointer;"
          >
            <v-list class="bg-grey-lighten-4">
              <v-list-item v-for="subItem in item.content" :key="subItem.key">
                {{ subItem.text }}
              </v-list-item>
            </v-list>
            <v-row>
              <v-col cols="1" offset="10">
                <v-btn variant="tonal">
                  详情
                </v-btn>
              </v-col>
            </v-row>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-list-item>
  </v-list>
</template>
<script lang="ts" setup>
  import type { TaskItem } from '../../type'
  import { ref } from 'vue'
  const data = inject('listData') as Array<TaskItem>

  // 默认展开所有面板
  const activePanels = ref(data.map((_, index) => index))
</script>
