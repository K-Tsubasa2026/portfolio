import './Header.css'

// メニューの項目
const navItems = [
  { label: 'works', href: '#works' },
  { label: 'skills', href: '#skills' },
  { label: 'about me', href: '#about' },
  { label: 'contact', href: '#contact' },
]

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="header-logo">
          KANEMATSU TSUBASA
        </a>
        <nav className="header-nav">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
