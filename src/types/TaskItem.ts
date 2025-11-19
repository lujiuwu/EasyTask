import dayjs from 'dayjs'
import { v4 as uuidv4 } from 'uuid'
import z from 'zod'
import { TaskStatus, TaskType } from '@/enum/task'
import { SubTaskItemSchema } from './SubTaskItem'

export const TaskItemSchema = z.object({
  title: z.string().min(3, '任务名称不得少于三个字符'),
  id: z.union([z.string().default(() => uuidv4()), z.number().default(0)]),
  type: z.nativeEnum(TaskType).default(TaskType.NORMAL),
  status: z.nativeEnum(TaskStatus).default(TaskStatus.UNFINISHED),
  createTime: z.string().default(dayjs().format('YYYY-MM-DD HH:mm:ss')).optional(),
  content: z.array(SubTaskItemSchema).optional().default([]),
  chips: z.array(z.object({
    label: z.string(),
    icon: z.string().optional(),
    color: z.string().optional(),
  })).optional().default([]),
})

export type TaskItem = z.infer<typeof TaskItemSchema>
