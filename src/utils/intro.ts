import introJs from 'intro.js'

interface IntroLabels {
  prevLabel: string
  nextLabel: string
  skipLabel: string
  doneLabel: string
}

interface IntroStep {
  element: string
  title: string
  intro: string
  position: 'bottom' | 'top' | 'left' | 'right'
}

export function startIntro (labels: IntroLabels, steps: IntroStep[]) {
  // 等待 DOM 渲染完成
  nextTick(() => {
    setTimeout(() => {
      const intro = introJs()
      intro.setOptions({
        prevLabel: labels.prevLabel,
        nextLabel: labels.nextLabel,
        skipLabel: labels.skipLabel,
        doneLabel: labels.doneLabel,
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
