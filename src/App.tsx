import { useEffect, useState } from 'react'

const COUNTDOWN_INITIAL_TIME_IN_SECONDS = 25 * 60

function App() {
  const [secondsAmount, setSecondsAmount] = useState(COUNTDOWN_INITIAL_TIME_IN_SECONDS)

  useEffect(() => {
    if(secondsAmount === 0) {
      alert('Finish')
      return
    }

    setTimeout(() => {
      setSecondsAmount(state => state - 1)
    }, 1000)
  }, [secondsAmount])

  const seconds = Math.floor(secondsAmount / 60)
  const minutes = secondsAmount % 60

  return (
    <div className="App">
      <span>{String(seconds).padStart(2, '0')}</span>
      <span>:</span>
      <span>{String(minutes).padStart(2, '0')}</span>
    </div>
  )
}

export default App
