// 大きいカードと小さいカードの両方で使う部品
import type { Work } from '../data/works'

export function WorkTags({ tags }: { tags: string[] }) {
  return (
    <ul className="work-tags">
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
      <a href={work.url} target="_blank" rel="noopener noreferrer" className="work-button is-primary">
        作品を見る
      </a>
      <a href={work.github} target="_blank" rel="noopener noreferrer" className="work-button is-outline">
        GitHub
      </a>
    </div>
  )
}
