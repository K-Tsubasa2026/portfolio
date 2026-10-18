import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number // 何秒待ってから出すか（並んだものを順番に出すときに使う）
}

// 画面に入ったら、ふわっと下から出てくる箱（見た目は index.css の .reveal）
function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`reveal${inView ? ' is-visible' : ''} ${className}`}
      style={{ '--delay': `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  )
}

export default Reveal
