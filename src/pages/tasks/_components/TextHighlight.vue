<template>
  <span>
    <span v-for="(item, idx) in props.text" :key="idx">
      <span v-if="idx >= props.highlightRange[0] && idx <= props.highlightRange[1]" :style="{ color: props.color }">
        {{ item }}
      </span>
      <span v-else>
        {{ item }}
      </span>
    </span>
  </span>
</template>
<script lang="ts" setup>
  const props = defineProps({
    text: {
      type: String,
      required: true,
    },
    highlightRange: {
      type: Array as unknown as PropType<[number, number]>,
      required: true,
    },
    color: {
      type: String,
      default: 'red',
    },
  })
</script>
