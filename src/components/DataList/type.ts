import z from 'zod'

export const TaskItemSchema = z.object({
  title: z.string(),
  id: z.number(),
  content: z.array(z.object({
    key: z.number(),
    text: z.string(),
    done: z.boolean().optional(),
  })),
  chips: z.array(z.object({
    label: z.string(),
    icon: z.string().optional(),
    color: z.string().optional(),
  })).optional(),
})

export type TaskItem = z.infer<typeof TaskItemSchema>
