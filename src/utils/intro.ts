import introJs from 'intro.js'
import { nextTick } from 'vue'

export function startIntro (t: (key: string) => string) {
  const steps = [
    {
      element: '#layout-check-btn',
      title: t('intro.contents.first-step.title'),
      intro: t('intro.contents.first-step.intro'),
      position: 'bottom' as const,
    },
    {
      element: '.star-book',
      title: t('intro.contents.second-step.title'),
      intro: t('intro.contents.second-step.intro'),
      position: 'bottom' as const,
    },
    {
      element: '.add-tasks',
      title: t('intro.contents.third-step.title'),
      intro: t('intro.contents.third-step.intro'),
      position: 'bottom' as const,
    },
  ]
  // 等待 DOM 渲染完成
  nextTick(() => {
    setTimeout(() => {
      const intro = introJs()
      intro.setOptions({
        prevLabel: t('intro.steps.prev-step'),
        nextLabel: t('intro.steps.next-step'),
        skipLabel: t('intro.steps.skip-step'),
        doneLabel: t('intro.steps.done-step'),
        steps,
      }).oncomplete(() => {
        // 需要注意的是，这里用了箭头函数
        // 点击结束按钮后执行的事件
      }).onexit(() => {
        // 点击跳过按钮后执行的事件
      }).onbeforeexit(() => {
        // 确认完毕之后执行的事件
        return true
      }).start()
    }, 100) // 延迟100ms确保任务项已渲染
  })
}
