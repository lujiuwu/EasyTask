import { v4 as uuidv4 } from 'uuid'
import z from 'zod'
import { TaskStatus } from '@/enum/task_status'
import { TaskType } from '@/enum/task_type'

export const TaskItemSchema = z.object({
  title: z.string().min(3, '任务名称不得少于三个字符'),
  type: z.nativeEnum(TaskType).default(TaskType.NORMAL),
  status: z.nativeEnum(TaskStatus).default(TaskStatus.UNFINISHED),
  content: z.array(z.object({
    text: z.string().optional(),
    key: z.string().default(() => uuidv4()),
    done: z.boolean().default(false),
    finishTime: z.string().default(''),
    remark: z.string().default(''),
  })).optional().default([]),
  chips: z.array(z.object({
    label: z.string(),
    icon: z.string().optional(),
    color: z.string().optional(),
  })).optional().default([]),
})

export type TaskItem = z.infer<typeof TaskItemSchema>
