const DEFAULT_OPTIONS = {
  animation: 'fade-up',
  delay: 0,
  duration: 700,
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px',
  once: true,
}

function parseOptions(value) {
  if (typeof value === 'string') {
    return { ...DEFAULT_OPTIONS, animation: value }
  }

  return { ...DEFAULT_OPTIONS, ...value }
}

export const vReveal = {
  mounted(el, binding) {
    const options = parseOptions(binding.value)
    const delay = Number(el.dataset.delay ?? options.delay)

    el.style.setProperty('--reveal-delay', `${delay}ms`)
    el.style.setProperty('--reveal-duration', `${options.duration}ms`)
    el.classList.add('reveal', `reveal-${options.animation}`)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          el.classList.add('revealed')

          if (options.once) {
            observer.unobserve(el)
          }
        })
      },
      {
        threshold: options.threshold,
        rootMargin: options.rootMargin,
      },
    )

    observer.observe(el)
    el._revealObserver = observer
  },

  unmounted(el) {
    el._revealObserver?.disconnect()
  },
}
