import './PawBackground.css'

// 肉球1つずつの位置・大きさ・速さ・色
const paws = [
  { left: '10%', top: '15%', size: 64, duration: 30, delay: 0, color: '#d9d7f1' },
  { left: '15%', top: '60%', size: 44, duration: 20, delay: 4, color: '#fffdde' },
  { left: '30%', top: '40%', size: 80, duration: 10, delay: 2, color: '#e7fbbe' },
  { left: '50%', top: '60%', size: 52, duration: 7, delay: 1, color: '#ffcbcb' },
  { left: '65%', top: '75%', size: 72, duration: 8, delay: 6, color: '#d6e5fa' },
  { left: '75%', top: '10%', size: 40, duration: 25, delay: 3, color: '#d9d7f1' },
  { left: '85%', top: '55%', size: 60, duration: 18, delay: 8, color: '#ffcbcb' },
  { left: '92%', top: '90%', size: 48, duration: 12, delay: 5, color: '#e7fbbe' },
]

function PawBackground() {
  return (
    // aria-hidden：飾りなので、読み上げソフトには読ませない
    <div className="paw-background" aria-hidden="true">
      {paws.map((paw, index) => (
        <i
          key={index}
          className="fa-solid fa-paw paw"
          style={{
            left: paw.left,
            top: paw.top,
            fontSize: `${paw.size}px`,
            color: paw.color,
            animationDuration: `${paw.duration}s`,
            animationDelay: `${paw.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

export default PawBackground
