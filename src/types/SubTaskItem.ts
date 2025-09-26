import { v4 as uuidv4 } from 'uuid'
import z from 'zod'

export const SubTaskItemSchema = z.object({
  text: z.string().optional(),
  key: z.string().default(() => uuidv4()),
  done: z.boolean().default(false),
  finishTime: z.string().default(''),
  remark: z.string().default(''),
})

export type SubTaskItem = z.infer<typeof SubTaskItemSchema>
