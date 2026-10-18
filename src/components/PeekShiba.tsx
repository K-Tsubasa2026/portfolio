import { useInView } from '../hooks/useInView'
import './PeekShiba.css'

type PeekShibaProps = {
  message?: string // ふきだしのセリフ（なければ出さない）
  sleeping?: boolean // true なら目を閉じて「Zzz」
  className?: string // 置く場所（左右の位置など）は、使う側の CSS で決める
}

// カードなどの上のふちから「ひょっこり」顔を出す、小さな柴犬。
// 親の要素に position: relative を付けて使う。
// 画面に入ったときに一度だけ出てくる。マウスを乗せると笑顔になる。
function PeekShiba({ message, sleeping = false, className = '' }: PeekShibaProps) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`peek-shiba${inView ? ' is-visible' : ''}${sleeping ? ' is-sleeping' : ''} ${className}`}
      aria-hidden="true" // 飾りなので、読み上げソフトには読ませない
    >
      {message && <span className="peek-shiba-bubble">{message}</span>}
      {sleeping && <span className="peek-shiba-zzz">Z z z</span>}

      <span className="peek-shiba-clip">
        <span className="peek-shiba-body">
          <img src={sleeping ? '/shiba/haran3.webp' : '/shiba/haran1.webp'} alt="" loading="lazy" />
          {!sleeping && <img src="/shiba/haran2.webp" alt="" className="peek-shiba-happy" loading="lazy" />}
        </span>
      </span>
    </div>
  )
}

export default PeekShiba
