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
}

export const works: Work[] = [
  {
    id: 'dog-test',
    title: 'あなたをわんこに例えると？',
    description:
      '30問の質問に答えると、あなたの性格を12匹の犬に例えて診断するWebアプリです。会員登録・診断履歴・結果画像の保存やLINEシェアにも対応しています。',
    tags: ['React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'AWS'],
    image: '/videos/dogtest-poster.jpg', // 動画の読み込み中に表示する画像
    video: '/videos/dogtest.mp4',
    url: 'https://d330uf5f2vl9lz.cloudfront.net',
    github: 'https://github.com/K-Tsubasa2026/dog-test',
    featured: true,
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
