import type { CalendarItem, DateInfo } from '../types/item'
import type { TaskItem } from '@/types/TaskItem'
import dayjs from 'dayjs'
import { ref } from 'vue'

export function useCalendarBaseInfo () {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1

  const activeDay = ref<DateInfo>({ month, year, day: date.getDate() })

  // 当前月份天数
  const daysInMouth = new Date(year, month, 0).getDate()
  // 当前月份1号是星期几
  const firstDayOfMouth = new Date(year, month - 1, 1).getDay()

  function formCalender (): Array<Array<CalendarItem>> {
    // 日历结构 -- 7(星期数) * (周数)
    const calender = Array.from({ length: 6 }).fill(null).map(() => Array.from({ length: 7 }).fill({ month: 0, year: 2025, day: 0 }))
    // 当前周数
    const week = ref(0)
    // 当前星期几
    const day = ref(firstDayOfMouth)

    let weekData = []

    for (let currentDate = 1; currentDate <= daysInMouth; currentDate++) {
      if (day.value > 6) {
        day.value = 0
        calender[week.value] = weekData
        week.value++
        weekData = []
      }

      weekData[day.value] = { month, year, day: currentDate }
      day.value++
    }

    calender[week.value] = weekData
    day.value = firstDayOfMouth

    // 上个月信息
    let lastMonthDays = new Date(year, month - 1, 0).getDate()
    for (let lastDay = day.value - 1; lastDay >= 0; lastDay--) {
      calender[0]![lastDay] = { month: month - 1, year, day: lastMonthDays-- }
    }
    // 下个月
    if (calender[5] && calender[5].length < 7) {
      for (let nextDay = 1; nextDay < 7; nextDay++) {
        calender[5]![nextDay] = { month: month + 1, year, day: nextDay }
      }
    }

    return calender as Array<Array<CalendarItem>>
  }

  function handleDayClick (day: DateInfo) {
    activeDay.value = day
  }

  const calender = formCalender()

  return {
    activeDay,
    calender,
    daysInMouth,
    firstDayOfMouth,
    handleDayClick,
    month,
    year,
  }
}

export function useInitCalendarTasks (tasks: TaskItem[]) {
  const taskMap = tasks.reduce((map, task) => {
    const time = dayjs(task.createTime)
    if (!time.isValid()) {
      return map
    }

    const key = `${time.year()}-${time.month() + 1}-${time.date()}`
    const bucket = map.get(key) ?? []
    bucket.push(task)
    map.set(key, bucket)
    return map
  }, new Map<string, TaskItem[]>())

  function attachTasks (calendar: CalendarItem[][]): CalendarItem[][] {
    return calendar.map(week =>
      week.map(dayItem => {
        const calendarDay = 'dateInfo' in dayItem
          ? dayItem
          : { dateInfo: dayItem as DateInfo, tasks: [] }

        const { year, month, day } = calendarDay.dateInfo
        const key = `${year}-${month}-${day}`

        return {
          ...calendarDay,
          tasks: taskMap.get(key) ?? [],
        }
      }),
    )
  }

  return { attachTasks }
}
