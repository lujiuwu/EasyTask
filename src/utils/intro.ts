import introJs from 'intro.js'
import { nextTick } from 'vue'

export function startIntro (t: (key: string) => string) {
  const steps = [
    {
      element: '#layout-check-btn',
      title: t('first-step.title'),
      intro: t('first-step.intro'),
      position: 'bottom' as const,
    },
    {
      element: '.add-tasks',
      title: t('second-step.title'),
      intro: t('second-step.intro'),
      position: 'bottom' as const,
    },
  ]
  // 等待 DOM 渲染完成
  nextTick(() => {
    setTimeout(() => {
      const intro = introJs()
      intro.setOptions({
        prevLabel: t('prev-step'),
        nextLabel: t('next-step'),
        skipLabel: t('skip-step'),
        doneLabel: t('done-step'),
        steps,
      }).oncomplete(() => {
        // 需要注意的是，这里用了箭头函数
        // 点击结束按钮后执行的事件
      }).onexit(() => {
        // 点击跳过按钮后执行的事件
      }).onbeforeexit(() => {
        // 确认完毕之后执行的事件
        // return confirm('Are you sure?')
      }).start()
    }, 100) // 延迟100ms确保任务项已渲染
  })
}
