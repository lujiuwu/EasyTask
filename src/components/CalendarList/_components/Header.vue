<template>
  <div class="calendar__header">
    <div class="calendar__header__title">
      <span class="main__title">
        {{ year }}-{{ month }}
      </span>
    </div>
    <div class="calendar__header__weeks">
      <div v-for="(item, index) in weeks" :key="index" class="calendar__header__weeks__item">{{ item }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useCalendarBaseInfo } from '../utils/data'
  const { year, month } = useCalendarBaseInfo()
  const weeks = ['日', '一', '二', '三', '四', '五', '六']
</script>

<style scope lang="scss">
  .calendar__header {
    &__title {
      background-color: #cce3dc;
      padding: 10px;
      font-size: 17px;
    }
    &__weeks {
      display: flex;
      &__item {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px 0;
      }
    }
  }
</style>
