<template>
  <div>
    <v-empty-state
      :headline="props.headline"
      :text="props.text"
      :title="props.title"
    />
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    headline: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  })
</script>
