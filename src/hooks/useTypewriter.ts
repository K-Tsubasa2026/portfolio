import { useEffect, useState } from 'react'

// 文字を1文字ずつ打って、少し待ってから消す。これを文章ごとにくり返す。
// useState：画面に出す文字を覚えておく箱
// useEffect：画面が表示されたあとにタイマーを動かす
export function useTypewriter(phrases: string[]) {
  const [text, setText] = useState('')

  useEffect(() => {
    let phraseIndex = 0
    let charIndex = 0
    let isDeleting = false
    let timerId: number

    const tick = () => {
      const current = phrases[phraseIndex]

      if (!isDeleting) {
        charIndex++
        setText(current.slice(0, charIndex))
        if (charIndex === current.length) {
          // 最後まで打ったら、少し止まってから消し始める
          isDeleting = true
          timerId = window.setTimeout(tick, 1800)
          return
        }
      } else {
        charIndex--
        setText(current.slice(0, charIndex))
        if (charIndex === 0) {
          // 消し終わったら次の文章へ
          isDeleting = false
          phraseIndex = (phraseIndex + 1) % phrases.length
        }
      }

      timerId = window.setTimeout(tick, isDeleting ? 60 : 90)
    }

    tick()

    // 画面から消えるときにタイマーを止める（動きっぱなしを防ぐ）
    return () => window.clearTimeout(timerId)
  }, [phrases])

  return text
}
