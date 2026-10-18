import Reveal from './Reveal'

type SectionTitleProps = {
  num: string // 01, 02 …（ヘッダーのメニューの番号とそろえる）
  en: string
  ja: string
}

// セクションの見出し：「01 / WORKS / つくったもの」
function SectionTitle({ num, en, ja }: SectionTitleProps) {
  return (
    <Reveal className="section-head">
      <span className="section-num">{num}</span>
      <h2 className="section-title">{en}</h2>
      <p className="section-sub">{ja}</p>
    </Reveal>
  )
}

export default SectionTitle
