import introJs from 'intro.js'

export function startIntro () {
  const steps = [
    {
      element: '#layout-check-btn',
      title: '第一步',
      intro: '点击这里可以切换任务列表布局',
      position: 'bottom' as const,
    },
    {
      element: '.add-tasks',
      title: '第二步',
      intro: '点击这里可以添加任务',
      position: 'bottom' as const,
    },
  ]
  // 等待 DOM 渲染完成
  nextTick(() => {
    setTimeout(() => {
      const intro = introJs()
      intro.setOptions({
        prevLabel: '上一步',
        nextLabel: '下一步',
        skipLabel: '跳过',
        doneLabel: '完成',
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
