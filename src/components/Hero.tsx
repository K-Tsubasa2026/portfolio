import Shiba from './Shiba'
import './Hero.css'

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-role">Web エンジニア志望</p>
          <div className="hero-id">
            <img
              src="/profile-avatar.webp"
              alt="兼松 つばさの写真"
              className="hero-avatar"
              width={240}
              height={240}
            />
            <h1 className="hero-name">
              兼松 つばさ
              <small>KANEMATSU TSUBASA</small>
            </h1>
          </div>

          <p className="hero-catch">
            {/* 言葉の途中で改行されないよう、かたまりごとに分ける */}
            <span className="hero-phrase">フロントから</span>
            <span className="hero-phrase">バックエンドまで</span>
            <span className="hero-phrase">作成し、</span>
            <br />
            <em>AWS</em> で公開しています。
          </p>
          <p className="hero-lead">
            React・Java（Spring Boot）・PostgreSQL で
            <br />
            性格診断アプリを開発し、Docker と AWS で公開まで行いました。
          </p>

          <div className="hero-actions">
            <a href="#works" className="btn is-primary">
              作品を見る
            </a>
            <a
              href="https://github.com/K-Tsubasa2026"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <i className="fa-brands fa-github" aria-hidden="true" />
              GitHub
            </a>
            <span className="hero-stamp">転職活動中</span>
          </div>
        </div>

        <div className="hero-shiba">
          <Shiba />
          <p className="hero-shiba-hint">なでてみてね</p>
        </div>
      </div>

      {/* 柴犬が前足をかけている手すり */}
      <div className="hero-ledge">
        <a href="#works" className="hero-scroll">
          SCROLL <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  )
}

export default Hero
