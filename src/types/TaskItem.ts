import z from 'zod'
import { TaskStatus } from '@/enum/task_status'
import { TaskType } from '@/enum/task_type'
import { SubTaskItemSchema } from './SubTaskItem'

export const TaskItemSchema = z.object({
  title: z.string().min(3, '任务名称不得少于三个字符'),
  type: z.nativeEnum(TaskType).default(TaskType.NORMAL),
  status: z.nativeEnum(TaskStatus).default(TaskStatus.UNFINISHED),
  content: z.array(SubTaskItemSchema).optional().default([]),
  chips: z.array(z.object({
    label: z.string(),
    icon: z.string().optional(),
    color: z.string().optional(),
  })).optional().default([]),
})

export type TaskItem = z.infer<typeof TaskItemSchema>
