import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function PageAnimations() {
  const { pathname } = useLocation()

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (motionPreference.matches || !('IntersectionObserver' in window)) return

    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section'))
    const animations = new Set<Animation>()
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        observer.unobserve(entry.target)
        if (motionPreference.matches) continue

        const animation = entry.target.animate(
          [
            { opacity: 0, transform: 'translateY(16px)' },
            { opacity: 1, transform: 'translateY(0)' },
          ],
          { duration: 550, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' },
        )
        animations.add(animation)
        animation.onfinish = () => animations.delete(animation)
      }
    }, { threshold: 0, rootMargin: '0px 0px -24px 0px' })

    sections.forEach((section) => observer.observe(section))

    function stopAnimations() {
      if (!motionPreference.matches) return
      observer.disconnect()
      animations.forEach((animation) => animation.cancel())
      animations.clear()
    }

    motionPreference.addEventListener('change', stopAnimations)
    return () => {
      observer.disconnect()
      animations.forEach((animation) => animation.cancel())
      motionPreference.removeEventListener('change', stopAnimations)
    }
  }, [pathname])

  return null
}

export default PageAnimations
