<template>
  <div class="calender__body">
    <div v-for="(item, index) in calender" :key="index" class="item">
      <div
        v-for="(day, idx) in item"
        :key="idx"
        class="item__day"
        :class="{
          'prev__month__content': index === 0 && idx < firstDayOfMouth,
          'next__month__content': index === 5 && idx > item.indexOf(daysInMouth)+1,
          'item__day-active': day.month === activeDay.month && day.year === activeDay.year && day.day === activeDay.day
        }"
        @click="handleDayClick(day)"
      >
        {{ day.day }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { TaskItem } from '@/types/TaskItem'
  import { useCalendarBaseInfo, useInitCalendarTasks } from '../utils/data'

  const props = defineProps({
    tasks: {
      type: Array as PropType<TaskItem[]>,
      default: () => [],
    },
  })
  const { calender, activeDay, daysInMouth, firstDayOfMouth, handleDayClick } = useCalendarBaseInfo()

  const { attachTasks } = useInitCalendarTasks(props.tasks)

  console.log(attachTasks(calender))

</script>
<style scope lang="scss">
  .calender__body {
    display: grid;
    flex-direction: column;

    .item {
      display: flex;
      height: calc((100vh - 500px) / 6);
      gap: 3px;

      .item__day {
        flex: 1;
        padding: 6px 8px;
        text-align: center;
        cursor: pointer;
      }

      .item__day-active {
        background-color: #007bff;
        color: #fff;
      }

      .prev__month__content, .next__month__content {
        color: #999;
        cursor: not-allowed;
        pointer-events: none;
      }
    }
  }
</style>
