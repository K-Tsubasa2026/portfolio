import './About.css'

type WorkArea = {
  title: string
  note?: string // ? は「なくてもよい」という意味
  tasks: string[]
}

const workAreas: WorkArea[] = [
  {
    title: '統計分析',
    note: 'SPSS、Excelを活用',
    tasks: ['組織分析', '採用/育成/適材適所分析', 'ヒューマンリスク分析', '分析レポート作成'],
  },
  {
    title: 'Web制作',
    tasks: [
      'ホームページ修正',
      'ワイヤーフレーム作成',
      'バナー/サムネイル制作',
      'リーフレット制作',
      'コンテンツ制作',
      '動画編集（インタビュー/セミナー動画）',
    ],
  },
  {
    title: 'プロジェクト管理',
    note: '年間9回のセミナー運営',
    tasks: ['企画立案', 'スケジュール管理', '集客', '運営', '参加者集計/分析'],
  },
]

function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">ABOUT ME</h2>
        <div className="about-card">
          <div className="about-card-header">
            <i className="fa-solid fa-address-card" aria-hidden="true" />
            <h3>現職について</h3>
          </div>
          <p className="about-lead">
            1.統計分析 2.Web制作 3.プロジェクト管理を中心とした業務に携わっています。
          </p>
          <div className="work-areas">
            {workAreas.map((area) => (
              <div key={area.title} className="work-area">
                <h4>{area.title}</h4>
                {area.note && <p className="work-area-note">{area.note}</p>}
                <ul>
                  {area.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
