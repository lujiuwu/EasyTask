export interface SearchedItem {
  label: string
  id: string
  indices: number[]
  supLabel?: string
}

export function formatTasksList (source: any[]): SearchedItem[] {
  const isSubFn = (str: string) => str.includes('.')
  const res = [] as any[]
  for (const item of source) {
    const sup = item.item
    const subs = item.matches
    for (const sub of subs) {
      const isSub = isSubFn(sub.key)
      // 子项 -- 需要包含supLabel
      if (isSub) {
        res.push({
          label: sub.value,
          supLabel: sup.title,
          id: sup.id,
          indices: sub.indices[0],
        })
      } else {
        res.push({
          label: sub.value,
          id: sup.id,
          indices: sub.indices[0],
        })
      }
    }
  }
  return res
}
