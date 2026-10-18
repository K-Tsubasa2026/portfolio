import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import './Skills.css'

type SkillGroup = {
  title: string
  sub: string
  icon: string // Font Awesome のクラス名
  items: string[]
  usedIn: string // どこで使ったか（実績とつなげる）
}

// 「何%できる」ではなく、「何を・どこで使ったか」を見せる
const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    sub: '画面づくり',
    icon: 'fa-solid fa-display',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vite'],
    usedIn: 'dog-test・模写3作品・このサイト',
  },
  {
    title: 'Backend',
    sub: 'サーバー',
    icon: 'fa-solid fa-server',
    items: ['Java', 'Spring Boot', 'Spring Security', 'JPA', 'JWT', 'PHP'],
    usedIn: 'dog-test の REST API・ログイン機能',
  },
  {
    title: 'Infra / Tools',
    sub: '公開・開発環境',
    icon: 'fa-solid fa-cloud',
    items: ['PostgreSQL', 'Docker', 'AWS（EC2・S3・CloudFront）', 'Git / GitHub', 'GitHub Actions'],
    usedIn: 'dog-test を AWS で公開・マンガサイト模写を自動公開',
  },
  {
    title: 'Design',
    sub: 'デザイン',
    icon: 'fa-solid fa-pen-nib',
    items: ['Figma', 'Photoshop', 'Illustrator', 'Premiere Pro', 'Canva', 'WordPress'],
    usedIn: '現職でバナー・リーフレット・動画を制作',
  },
  {
    title: 'Analysis',
    sub: '統計分析',
    icon: 'fa-solid fa-chart-pie',
    items: ['SPSS', 'Excel', '重回帰', 't検定', 'クラスタ分析', '因子分析'],
    usedIn: '現職で組織分析・採用分析のレポートを作成',
  },
  {
    title: 'Project',
    sub: '進行管理',
    icon: 'fa-solid fa-list-check',
    items: ['企画立案', 'スケジュール管理', 'タスク管理', '関係者調整'],
    usedIn: '現職で年間9回のセミナーを運営',
  },
]

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <SectionTitle num="02" en="SKILLS" ja="できること" />
        <ul className="skill-grid">
          {skillGroups.map((group, index) => (
            <li key={group.title} className="skill-grid-item">
              {/* 横に3つずつ並ぶので、列ごとに少しずつずらして出す */}
              <Reveal delay={(index % 3) * 0.12} className="card skill-card">
                <div className="skill-card-head">
                  <span className="skill-icon">
                    <i className={group.icon} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.sub}</p>
                  </div>
                </div>
                <ul className="chips">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="skill-used">
                  <i className="fa-solid fa-paw" aria-hidden="true" />
                  {group.usedIn}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
