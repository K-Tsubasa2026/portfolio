import type { CSSProperties } from 'react'
import { useInView } from '../hooks/useInView'
import './Skills.css'

type Skill = {
  name: string
  icon: string // Font Awesome のクラス名
  level: number // バーの長さ（%）
  detail: string
}

const skills: Skill[] = [
  {
    name: 'Design',
    icon: 'fa-solid fa-gem',
    level: 85,
    detail: 'Figma / WordPress / Photoshop / Illustrator / Premiere Pro / Canva',
  },
  {
    name: 'Programming',
    icon: 'fa-solid fa-file-code',
    level: 50,
    detail: 'HTML5 / CSS3 / JavaScript / TypeScript / React / PHP',
  },
  {
    name: 'Analysis',
    icon: 'fa-solid fa-chart-pie',
    level: 80,
    detail: '相関 / 重回帰 / クロス / t検定 / 分散 / クラスタ / 因子分析',
  },
  {
    name: 'Project Coordination',
    icon: 'fa-solid fa-calendar-days',
    level: 75,
    detail: 'セミナー企画・運営における進行管理 / 関係者調整 / スケジュール管理 / タスク管理',
  },
]

function Skills() {
  // リストが画面に入ったら、バーを伸ばす
  const { ref, inView } = useInView<HTMLUListElement>()

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">SKILLS</h2>
        <ul ref={ref} className={`skills-list${inView ? ' is-visible' : ''}`}>
          {skills.map((skill) => (
            // --level：CSS に「何%まで伸ばすか」を渡す
            <li
              key={skill.name}
              className="skill"
              style={{ '--level': `${skill.level}%` } as CSSProperties}
            >
              <span className="skill-name">
                <i className={skill.icon} aria-hidden="true" />
                {skill.name}
              </span>
              <div className="skill-body">
                <div className="skill-bar">
                  <div className="skill-level" />
                </div>
                <p className="skill-detail">{skill.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
