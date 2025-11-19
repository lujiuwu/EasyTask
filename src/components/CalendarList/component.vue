<template>
  <div class="p-10px">
    <CalendarBaseContent :data="test" />
  </div>
</template>

<script setup>

  const test = [
    {
      title: 'Task 1',
      target: '2025-11-10',
    },
    {
      title: 'Task 2',
      target: '2025-11-11',
    },
  ]
</script>
