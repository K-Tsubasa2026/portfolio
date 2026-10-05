import { useTypewriter } from '../hooks/useTypewriter'
import './Hero.css'

// タイプライターで順番に表示する文章
// （コンポーネントの外に置くと、表示し直すたびに作り直されない）
const phrases = ['こんにちは', 'ポートフォリオをご覧いただきありがとうございます']

function Hero() {
  const typedText = useTypewriter(phrases)

  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1 className="hero-name">
            兼松 つばさ
            <img src="/shibalogo.png" alt="" className="hero-name-logo" />
          </h1>

          <p className="hero-typewriter">
            {typedText}
            <span className="hero-cursor" aria-hidden="true">
              |
            </span>
          </p>

          <p className="hero-intro">
            AIを的確に活用しながらも、頼り切らず、
            <br />
            自ら手を動かして学び続けるエンジニアを目指しています。
            <br />
            タスクごとにゴールを明確にし、問題の特定・修正・解決を積み重ねながら、
            <br />
            幅広いスキルを吸収していく姿勢を大切にしています。
          </p>

          <a
            href="https://github.com/K-Tsubasa2026"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-github"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github" />
          </a>
        </div>

        <div className="hero-photo">
          <img src="/profile.jpg" alt="兼松 つばさのプロフィール写真" />
        </div>
      </div>
    </section>
  )
}

export default Hero
