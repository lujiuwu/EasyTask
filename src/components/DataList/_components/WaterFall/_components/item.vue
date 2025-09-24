<template>
  <div style="border: 1px solid #eee;padding: 1px;">
    <v-card>
      <v-card-title>{{ props.data.title }}</v-card-title>
      <v-card-subtitle>
        共 {{ props.data.content.length }} 项
      </v-card-subtitle>
      <v-card-text style="cursor: pointer;padding: 5px;">
        <v-list>
          <v-list-item
            v-for="(item, index) in props.data.content"
            :key="item.key"
          >
            <span class="color-red">{{ index+1 }}.</span>
            <span :style="{textDecoration:item.done?'line-through red':'none'}">{{ item.text }}</span>
          </v-list-item>
        </v-list>
      </v-card-text>
      <template #actions>
        <v-row>
          <v-col cols="1" offset="7">
            <v-btn variant="tonal" @click="$router.push(`/tasks/${props.data.id}`)">
              详情
            </v-btn>
          </v-col>
        </v-row>
      </template>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
  })
</script>
