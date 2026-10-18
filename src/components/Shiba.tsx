import { useEffect, useRef, useState } from 'react'
import './Shiba.css'

// なでたときに出るセリフ（順番に表示する）
const barks = ['ワン！', 'なでてくれて ありがとう', '作品も 見てね！']

// 柴犬のキャラクター。
// 同じ構図で表情だけちがう3枚の画像を重ねて、見せる画像を切りかえる。
// ・ふだん：normal（ときどき blink を一瞬だけ見せて、まばたき）
// ・クリックしたとき：happy に切りかえて、ぴょこっと弾む
function Shiba() {
  const [bark, setBark] = useState<{ id: number; text: string } | null>(null)
  const timerRef = useRef<number | undefined>(undefined)

  // 画面から消えるときにタイマーを止める
  useEffect(() => () => window.clearTimeout(timerRef.current), [])

  const handleClick = () => {
    setBark((prev) => {
      const id = (prev?.id ?? -1) + 1
      return { id, text: barks[id % barks.length] }
    })
    window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => setBark(null), 1800)
  }

  return (
    <button
      type="button"
      className={`shiba${bark ? ' is-happy' : ''}`}
      onClick={handleClick}
      aria-label="柴犬をなでる"
    >
      {bark && (
        // key を変えると、毎回ふきだしのアニメーションが最初から動く
        <span key={bark.id} className="shiba-bubble" role="status">
          {bark.text}
        </span>
      )}

      {/* 下の手すりより下を隠す箱（ここから「ひょっこり」出てくる） */}
      <span className="shiba-clip">
        <span className="shiba-pop">
          {/* key を変えると、なでるたびに「ぴょこっ」が最初から動く */}
          <span key={bark?.id ?? 'idle'} className="shiba-body">
            <img src="/shiba/shiba-normal.webp" alt="" className="shiba-img" />
            <img src="/shiba/shiba-blink.webp" alt="" className="shiba-img shiba-img-blink" />
            <img src="/shiba/shiba-happy.webp" alt="" className="shiba-img shiba-img-happy" />
          </span>
        </span>
      </span>
    </button>
  )
}

export default Shiba
