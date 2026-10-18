import { useEffect, useRef, useState } from 'react'

// 要素が画面に入ったかどうかを調べる。
// IntersectionObserver：要素が画面に見えたことを、ブラウザが教えてくれる仕組み
export function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect() // 一度見えたら、それ以上は調べない
        }
      },
      // 画面の下から 15% 入ったところで「入った」とする。
      // （割合で決めると、スマホで縦に長い要素がいつまでも「入らない」ため）
      { rootMargin: '0px 0px -15% 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return { ref, inView }
}
