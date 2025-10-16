import { z } from 'zod'

export const StarItemSchema = z.object({
  id: z.string(),
  tasksId: z.string(),
  starTime: z.string(),
})

export type StarItem = z.infer<typeof StarItemSchema>
