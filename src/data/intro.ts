/**
 * 新手指引配置数据
 */

export interface IntroLabels {
  prevLabel: string
  nextLabel: string
  skipLabel: string
  doneLabel: string
}

export interface IntroStep {
  element: string
  title: string
  intro: string
  position: 'bottom' | 'top' | 'left' | 'right'
}

export interface IntroConfig {
  labels: IntroLabels
  steps: IntroStep[]
}

/**
 * 获取新手指引配置
 * @param t 翻译函数
 * @returns 新手指引配置
 */
export function getIntroConfig (t: (key: string) => string): IntroConfig {
  const labels = {
    prevLabel: t('intro.steps.prev-step'),
    nextLabel: t('intro.steps.next-step'),
    skipLabel: t('intro.steps.skip-step'),
    doneLabel: t('intro.steps.done-step'),
  }

  const steps: IntroStep[] = [
    {
      element: '#layout-check-btn',
      title: t('intro.contents.first-step.title'),
      intro: t('intro.contents.first-step.intro'),
      position: 'bottom',
    },
    {
      element: '.star-book',
      title: t('intro.contents.second-step.title'),
      intro: t('intro.contents.second-step.intro'),
      position: 'bottom',
    },
    {
      element: '.add-tasks',
      title: t('intro.contents.third-step.title'),
      intro: t('intro.contents.third-step.intro'),
      position: 'bottom',
    },
  ]

  return { labels, steps }
}
