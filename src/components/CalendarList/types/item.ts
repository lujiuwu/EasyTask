import { z } from 'zod'
import { TaskItemSchema } from '@/types/TaskItem'

export const DateInfoSchema = z.object({
  year: z.number(),
  month: z.number(),
  day: z.number(),
})

export type DateInfo = z.infer<typeof DateInfoSchema>

export const CalendarItemSchema = z.object({
  // 基础日期信息
  dateInfo: DateInfoSchema,
  // 当天的任务列表
  tasks: z.array(TaskItemSchema).optional().default([]),
})

export type CalendarItem = z.infer<typeof CalendarItemSchema>
