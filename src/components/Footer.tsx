import './Footer.css'

function Footer() {
  return (
    <>
      <footer className="footer">
        <p>© 2026 Tsubasa Kanematsu Portfolio</p>
      </footer>

      {/* 画面の右下に固定される「TOPへ」ボタン */}
      <a href="#top" className="back-to-top" aria-label="ページの先頭へ戻る">
        <span className="back-to-top-label">TOPへ</span>
        <i className="fa-solid fa-bone" aria-hidden="true" />
      </a>
    </>
  )
}

export default Footer
