<template>
  <v-bottom-sheet :model-value="modelValue" @update:model-value="modelValue = $event">
    <v-card>
      <v-card-title>
        添加项
      </v-card-title>
      <v-card-text>
        <div class="grid grid-cols-2 gap-10px">
          <div v-for="item in items" :key="item.to" class="selection-item" @click="handleClick(item)">
            <v-icon class="mr-10px">{{ item.icon }}</v-icon>
            <span>{{ item.label }}</span>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-bottom-sheet>
</template>
<script lang="ts" setup>
  import { useVModel } from '@vueuse/core'
  import router from '@/router'

  const props = defineProps({
    items: {
      type: Array as PropType<{ to: string, label: string, icon: string }[]>,
      default: () => [],
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  })
  const emit = defineEmits(['update:modelValue'])
  const modelValue = useVModel(props, 'modelValue', emit)

  function handleClick (item: { to: string }) {
    router.push('/add' + item.to)
    modelValue.value = false
  }
</script>
<style scoped lang="scss">
.selection-item {
  height: 80px;
  display: flex;
  padding-left: 10px;
  font-size: 18px;
  color: #fff;
  align-items: center;
  background: #555555;
  border-radius: 5px;
}
</style>
