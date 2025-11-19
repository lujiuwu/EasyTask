import type { ToolBarOptions } from '@/enum/layout'
import { tryOnBeforeUnmount } from '@vueuse/core'
// 标题（主标题 || 副标题）
const title = shallowRef<() => string | JSX.Element>(() => '')

// 右侧可选项（筛选按钮）
const options = shallowRef<Array<ToolBarOptions>>([])

// 全局共享状态
export const renderHeader = shallowRef<{
  title: () => string | JSX.Element
  options: Array<ToolBarOptions>
}>({
  title: title.value,
  options: options.value,
})

// 修改头部内容
export function useHeader (renderOptions: { title: () => string | JSX.Element, options?: Array<ToolBarOptions> }) {
  const old = renderHeader.value
  renderHeader.value = {
    title: renderOptions.title,
    options: renderOptions.options ?? [],
  }
  tryOnBeforeUnmount(() => {
    renderHeader.value = old
  })
  return renderHeader
}
