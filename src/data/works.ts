// 作品の情報。ここに足すだけで WORKS にカードが増える。
export type Work = {
  id: string
  title: string
  description: string
  tags: string[]
  image: string // カードの画像（public からのパス）
  video?: string // 動画（あれば画像の代わりに再生する）
  url: string // 公開ページ
  github: string
  featured?: boolean // true なら大きいカードで表示する
  features?: string[] // 主な機能（大きいカードだけで使う）
  points?: { title: string; body: string }[] // 工夫したこと（大きいカードだけで使う）
  showArchitecture?: boolean // true ならシステム構成図を出す
}

export const works: Work[] = [
  {
    id: 'dog-test',
    title: 'あなたをわんこに例えると？',
    description:
      '30問の質問に答えると、自身の性格を12匹の犬に例えて診断できるWebアプリです。会員登録・診断履歴・結果画像の保存やLINEシェアにも対応しています。',
    tags: ['React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'AWS'],
    image: '/videos/dogtest-poster.jpg', // 動画の読み込み中に表示する画像
    video: '/videos/dogtest.mp4',
    url: 'https://d330uf5f2vl9lz.cloudfront.net',
    github: 'https://github.com/K-Tsubasa2026/dog-test',
    featured: true,
    features: [
      '30問の性格診断',
      'レーダーチャート（SVG で自作）',
      '結果の画像保存・LINE シェア',
      '新規登録・ログイン（JWT）',
      'マイページ・診断履歴',
      'レスポンシブ対応',
    ],
    points: [
      {
        title: '診断ロジックはバックエンドで',
        body: '回答から「社交性」「行動力」など6項目の点数を出し、12犬種それぞれの値といちばん近い（ユークリッド距離が最小の）犬種を結果にしています。フロントエンドからは回答だけを API で送る構成です。',
      },
      {
        title: 'iPhone で画像が欠ける不具合を解決',
        body: 'html-to-image で結果カードを画像にすると、iPhone では犬の画像だけが入らない問題がありました。犬の画像の読み込み完了を待ってから、canvas に直接描き込む方法で解決しました。',
      },
      {
        title: 'RDS をやめて費用を削減',
        body: '最初はデータベースに RDS を使っていましたが、作品の規模に対して費用が大きかったため、EC2 の中で PostgreSQL を Docker で動かす構成に変更しました。データは pg_dump で移行しました。',
      },
    ],
    showArchitecture: true,
  },
  {
    id: 'google-demo',
    title: '検索ページ 模写',
    description: '検索サイトのトップページを再現しました。',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/google-demo.jpg',
    url: 'https://k-tsubasa2026.github.io/google-demo/',
    github: 'https://github.com/K-Tsubasa2026/google-demo',
  },
  {
    id: 'amazon-demo',
    title: 'ECサイト ヘッダー模写',
    description: '大手ECサイトのヘッダーUIを、フレームワークを使わずに再現しました。',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/amazon-demo.jpg',
    url: 'https://k-tsubasa2026.github.io/amazon-demo/',
    github: 'https://github.com/K-Tsubasa2026/amazon-demo',
  },
  {
    id: 'kadocomi-demo',
    title: 'マンガサイト 模写',
    description: 'マンガ配信サイトのトップページを、Reactのコンポーネントで再現しました。',
    tags: ['React', 'TypeScript', 'Vite'],
    image: '/images/kadocomi-demo.jpg',
    url: 'https://k-tsubasa2026.github.io/kadocomi-demo/',
    github: 'https://github.com/K-Tsubasa2026/kadocomi-demo',
  },
]
