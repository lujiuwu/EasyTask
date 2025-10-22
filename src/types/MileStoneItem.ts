import z from 'zod'

export const MileStoneItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  createdAt: z.string(),
  startAt: z.string(),
  targetAt: z.string(),
  mark: z.string().optional(),
  tasksId: z.array(z.string()),
})

export type MileStoneItem = z.infer<typeof MileStoneItemSchema>
