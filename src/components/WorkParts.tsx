// 大きいカードと小さいカードの両方で使う部品
import type { Work } from '../data/works'

export function WorkTags({ tags }: { tags: string[] }) {
  return (
    <ul className="chips work-tags">
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  )
}

export function WorkButtons({ work }: { work: Work }) {
  return (
    <div className="work-buttons">
      {/* target="_blank"：新しいタブで開く。rel は安全のために付ける */}
      <a href={work.url} target="_blank" rel="noopener noreferrer" className="btn is-primary is-small">
        作品を見る
      </a>
      <a href={work.github} target="_blank" rel="noopener noreferrer" className="btn is-small">
        <i className="fa-brands fa-github" aria-hidden="true" />
        GitHub
      </a>
    </div>
  )
}

// システム構成図（dog-test 用）。
// 1行 = ブラウザから順番にたどる道すじ。group があるものは、枠の中にまとめて描く
type ArchNode = { label: string; note?: string }
type ArchStep = ArchNode | { group: string; items: ArchNode[] }

const archRows: { title: string; steps: ArchStep[] }[] = [
  {
    title: '画面',
    steps: [
      { label: 'ブラウザ' },
      { label: 'CloudFront', note: '配信' },
      { label: 'S3', note: 'React のビルド' },
    ],
  },
  {
    title: 'API',
    steps: [
      { label: 'ブラウザ' },
      { label: 'CloudFront', note: 'HTTPS 化' },
      {
        group: 'EC2（Docker）',
        items: [{ label: 'Spring Boot', note: 'REST API・JWT' }, { label: 'PostgreSQL' }],
      },
    ],
  },
]

function ArchBox({ node }: { node: ArchNode }) {
  return (
    <span className="arch-node">
      {node.label}
      {node.note && <small>{node.note}</small>}
    </span>
  )
}

export function ArchitectureDiagram() {
  return (
    <div className="arch">
      {archRows.map((row) => (
        <div key={row.title} className="arch-row">
          <span className="arch-row-title">{row.title}</span>
          {row.steps.map((step, index) => (
            <div key={index} className="arch-step">
              {/* 2つ目からは、前の箱とのあいだに矢印を入れる */}
              {index > 0 && (
                <span className="arch-arrow" aria-hidden="true">
                  →
                </span>
              )}
              {'group' in step ? (
                <div className="arch-group">
                  <span className="arch-group-title">{step.group}</span>
                  {step.items.map((item, itemIndex) => (
                    <div key={item.label} className="arch-step">
                      {itemIndex > 0 && (
                        <span className="arch-arrow" aria-hidden="true">
                          →
                        </span>
                      )}
                      <ArchBox node={item} />
                    </div>
                  ))}
                </div>
              ) : (
                <ArchBox node={step} />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
