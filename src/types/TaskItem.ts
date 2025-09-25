import z from 'zod'
import { TaskStatus } from '@/enum/task_status'
import { TaskType } from '@/enum/task_type'

export const TaskItemSchema = z.object({
  title: z.string(),
  id: z.number(),
  status: z.nativeEnum(TaskStatus).default(TaskStatus.UNFINISHED),
  type: z.nativeEnum(TaskType).default(TaskType.NORMAL),
  content: z.array(z.object({
    key: z.number(),
    text: z.string(),
    done: z.boolean().optional(),
    finishTime: z.string().optional(),
    remark: z.string().optional(),
  })),
  chips: z.array(z.object({
    label: z.string(),
    icon: z.string().optional(),
    color: z.string().optional(),
  })).optional(),
})

export type TaskItem = z.infer<typeof TaskItemSchema>
