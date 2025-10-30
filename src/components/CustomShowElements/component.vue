<template>
  <v-bottom-sheet v-model="modelValue">
    <v-card>
      <v-card-title>222</v-card-title>
    </v-card>
  </v-bottom-sheet>
</template>
<script lang="ts" setup>
  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false,
    },
  })
  const emit = defineEmits(['update:modelValue'])
  const modelValue = computed({
    get: () => props.modelValue,
    set: value => emit('update:modelValue', value),
  })
</script>
