import PeekShiba from './PeekShiba'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import './About.css'

type WorkArea = {
  title: string
  icon: string // Font Awesome のクラス名
  note?: string // ? は「なくてもよい」という意味
  tasks: string[]
}

const workAreas: WorkArea[] = [
  {
    title: '統計分析',
    icon: 'fa-solid fa-chart-pie',
    note: 'SPSS・Excel を活用',
    tasks: ['組織分析', '採用・育成・適材適所の分析', 'ヒューマンリスク分析', '分析レポート作成'],
  },
  {
    title: 'Web制作',
    icon: 'fa-solid fa-pen-nib',
    tasks: [
      'ホームページ修正',
      'ワイヤーフレーム作成',
      'バナー・サムネイル制作',
      'リーフレット制作',
      'コンテンツ制作',
      '動画編集（インタビュー・セミナー）',
    ],
  },
  {
    title: 'プロジェクト管理',
    icon: 'fa-solid fa-list-check',
    note: '年間9回のセミナー運営',
    tasks: ['企画立案', 'スケジュール管理', '集客', '運営', '参加者の集計・分析'],
  },
]

function About() {
  return (
    <section id="about">
      <div className="container">
        <SectionTitle num="03" en="ABOUT" ja="わたしについて" />

        {/* 名刺のようなプロフィールカード。上のふちから柴犬がのぞく */}
        <Reveal>
          <div className="card profile-card">
            <PeekShiba className="profile-card-shiba" />

            <img
              src="/profile-card.webp"
              alt="兼松 つばさのプロフィール写真"
              className="profile-photo"
              width={600}
              height={600}
              loading="lazy"
            />

            <div className="profile-body">
              <p className="profile-label">PROFILE</p>
              <h3 className="profile-name">
                兼松 つばさ
                <small>KANEMATSU TSUBASA</small>
              </h3>
              <ul className="chips profile-chips">
                <li>Web エンジニア志望</li>
                <li>転職活動中</li>
              </ul>
              <p className="profile-text">
                {/* 2つの文を1つの文字列にして、あいだに余計な空白が入らないようにする */}
                {'AIを的確に活用しながらも、頼り切らず、自ら手を動かして学び続けるエンジニアを目指しています。' +
                  'タスクごとにゴールを明確にし、問題の特定・修正・解決を積み重ねながら、幅広いスキルを吸収していく姿勢を大切にしています。'}
              </p>
              <a
                href="https://github.com/K-Tsubasa2026"
                target="_blank"
                rel="noopener noreferrer"
                className="btn is-small"
              >
                <i className="fa-brands fa-github" aria-hidden="true" />
                GitHub
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <h3 className="about-sub-title">いまの仕事</h3>
          <p className="about-lead">
            統計分析・Web制作・プロジェクト管理を中心とした業務に携わっています。
          </p>
        </Reveal>
        <ul className="work-areas">
          {workAreas.map((area, index) => (
            <li key={area.title} className="work-area-item">
              <Reveal delay={index * 0.12} className="work-area">
                <h4>
                  <i className={area.icon} aria-hidden="true" />
                  {area.title}
                </h4>
                {area.note && <p className="work-area-note">{area.note}</p>}
                <ul>
                  {area.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About
