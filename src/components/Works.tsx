import { works, type Work } from '../data/works'
import { WorkButtons, WorkTags } from './WorkParts'
import './Works.css'

// featured が付いた作品（dog-test）と、それ以外に分ける
const featuredWork = works.find((work) => work.featured)
const otherWorks = works.filter((work) => !work.featured)

// 大きいカード：動画（なければ画像）を中央に置き、その下に説明
function FeaturedWorkCard({ work }: { work: Work }) {
  return (
    <article className="work-featured">
      <div className="work-featured-media">
        {work.video ? (
          // muted：音なし / autoPlay：自動再生 / loop：くり返し / playsInline：iPhone で全画面にしない
          <video src={work.video} poster={work.image} autoPlay muted loop playsInline />
        ) : (
          <img src={work.image} alt={`${work.title}の画面`} />
        )}
      </div>

      <div className="work-featured-body">
        <h3 className="work-featured-title">{work.title}</h3>
        <h4 className="work-label">概要</h4>
        <p className="work-description">{work.description}</p>
        <h4 className="work-label">使用技術</h4>
        <WorkTags tags={work.tags} />
        <WorkButtons work={work} />
      </div>
    </article>
  )
}

// 小さいカード：上に画像、下に説明
function WorkCard({ work }: { work: Work }) {
  return (
    <article className="work-card">
      <img src={work.image} alt={`${work.title}の画面`} className="work-card-image" loading="lazy" />
      <div className="work-card-body">
        <h3 className="work-card-title">{work.title}</h3>
        <p className="work-description">{work.description}</p>
        <WorkTags tags={work.tags} />
        <WorkButtons work={work} />
      </div>
    </article>
  )
}

function Works() {
  return (
    <section id="works">
      <div className="container">
        <h2 className="section-title">WORKS</h2>
        {featuredWork && <FeaturedWorkCard work={featuredWork} />}
        <div className="work-grid">
          {otherWorks.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works
