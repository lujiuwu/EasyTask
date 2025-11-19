import { z } from 'zod'

export const StarItemSchema = z.object({
  id: z.string(),
  type: z.enum(['task', 'milestone']),
  itemId: z.string(),
  starAt: z.string(),
})

export type StarItem = z.infer<typeof StarItemSchema>
