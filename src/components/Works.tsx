import { useRef, useState } from 'react'
import { works, type Work } from '../data/works'
import { ArchitectureDiagram, WorkButtons, WorkTags } from './WorkParts'
import PeekShiba from './PeekShiba'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import './Works.css'

// featured が付いた作品（dog-test）と、それ以外に分ける
const featuredWork = works.find((work) => work.featured)
const otherWorks = works.filter((work) => !work.featured)

// 動画：再生ボタンを押したら始まる。終わったら最初の画面に戻る。
function WorkVideo({ src, poster }: { src: string; poster: string }) {
  // useRef：<video> 要素そのものを覚えておき、play() を呼べるようにする
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    videoRef.current?.play()
    setIsPlaying(true)
  }

  const handleEnded = () => {
    const video = videoRef.current
    if (video) video.currentTime = 0 // 最初の場面に戻す
    setIsPlaying(false)
  }

  return (
    <div className="work-video">
      {/* controls：再生中だけ、一時停止や全画面の操作バーを出す */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        preload="metadata"
        playsInline
        controls={isPlaying}
        onEnded={handleEnded}
      />
      {!isPlaying && (
        <button type="button" className="work-video-play" onClick={handlePlay}>
          <span className="work-video-play-icon" aria-hidden="true">
            <i className="fa-solid fa-play" />
          </span>
          <span className="work-video-play-label">デモ動画を再生（約1分）</span>
        </button>
      )}
    </div>
  )
}

// 大きいカード：上段に「動画｜タイトル・概要」、下段に機能・工夫・構成図
function FeaturedWorkCard({ work }: { work: Work }) {
  return (
    <article className="card work-featured">
      <PeekShiba message="これ、自信作です！" className="work-featured-shiba" />

      <div className="work-featured-top">
        {work.video ? (
          <WorkVideo src={work.video} poster={work.image} />
        ) : (
          <img src={work.image} alt={`${work.title}の画面`} className="work-featured-image" />
        )}

        <div className="work-featured-body">
          <p className="work-badge">MAIN WORK ／ 個人開発</p>
          <h3 className="work-featured-title">{work.title}</h3>
          <p className="work-description">{work.description}</p>
          <WorkTags tags={work.tags} />
          <WorkButtons work={work} />
        </div>
      </div>

      {work.features && (
        <Reveal className="work-block">
          <h4 className="work-block-title">主な機能</h4>
          <ul className="work-features">
            {work.features.map((feature) => (
              <li key={feature}>
                <i className="fa-solid fa-paw" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </Reveal>
      )}

      {work.points && (
        <div className="work-block">
          <Reveal>
            <h4 className="work-block-title">工夫したこと</h4>
          </Reveal>
          <ol className="work-points">
            {work.points.map((point, index) => (
              // 3つを順番に、少しずつずらして出す
              <li key={point.title}>
                <Reveal delay={index * 0.12} className="work-point">
                  <span className="work-point-num">{String(index + 1).padStart(2, '0')}</span>
                  <h5>{point.title}</h5>
                  <p>{point.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      )}

      {work.showArchitecture && (
        <Reveal className="work-block">
          <h4 className="work-block-title">システム構成</h4>
          <ArchitectureDiagram />
        </Reveal>
      )}
    </article>
  )
}

// 小さいカード：上に画像、下に説明
function WorkCard({ work }: { work: Work }) {
  return (
    <article className="card work-card">
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
        <SectionTitle num="01" en="WORKS" ja="つくったもの" />

        {featuredWork && (
          <Reveal>
            <FeaturedWorkCard work={featuredWork} />
          </Reveal>
        )}

        <Reveal>
          <h3 className="works-sub-title">模写で練習した作品</h3>
        </Reveal>
        <div className="work-grid">
          {otherWorks.map((work, index) => (
            <Reveal key={work.id} delay={index * 0.12} className="work-grid-item">
              <WorkCard work={work} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works
