import { useRef, useState } from 'react'
import { works, type Work } from '../data/works'
import { WorkButtons, WorkTags } from './WorkParts'
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
      <div className="work-video-screen">
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
    </div>
  )
}

// 大きいカード：動画（なければ画像）を中央に置き、その下に説明
function FeaturedWorkCard({ work }: { work: Work }) {
  return (
    <article className="work-featured">
      {work.video ? (
        <WorkVideo src={work.video} poster={work.image} />
      ) : (
        <div className="work-featured-media">
          <img src={work.image} alt={`${work.title}の画面`} />
        </div>
      )}

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
