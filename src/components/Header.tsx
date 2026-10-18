import './Header.css'

// メニューの項目（番号は「さんぽ道の立ち寄りポイント」の順番）
const navItems = [
  { label: 'WORKS', href: '#works' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
]

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="header-logo">
          <img src="/shibalogo.png" alt="" />
          TSUBASA
        </a>
        <nav className="header-nav">
          {navItems.map((item, index) => (
            <a key={item.href} href={item.href}>
              {/* 01, 02 … のように2けたで表示する */}
              <span className="header-nav-num">{String(index + 1).padStart(2, '0')}</span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
