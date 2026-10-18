import { useEffect, useState } from 'react'
import PeekShiba from './PeekShiba'
import './Footer.css'

function Footer() {
  // 少しスクロールしたら「TOPへ」ボタンを出す（最初の画面では柴犬とかぶるので隠す）
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 600)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <footer className="footer">
        {/* フッターの上のふちで、柴犬がお昼寝 */}
        <PeekShiba sleeping className="footer-shiba" />
        <p className="footer-copy">© 2026 Tsubasa Kanematsu Portfolio</p>
      </footer>

      {/* 画面の右下に固定される「TOPへ」ボタン */}
      <a
        href="#top"
        className={`back-to-top${showTop ? ' is-shown' : ''}`}
        aria-label="ページの先頭へ戻る"
        tabIndex={showTop ? 0 : -1}
      >
        <span className="back-to-top-label">TOP</span>
        <i className="fa-solid fa-bone" aria-hidden="true" />
      </a>
    </>
  )
}

export default Footer
