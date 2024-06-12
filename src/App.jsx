import { useState } from 'react'
import './App.css'
import Game from './components/mini_game/Game'

export default function App() {
  const [isStart, SetIsStart] = useState(false)
  return (
    <>
      <div className="box-game">
        <img src="coroa.png" alt="coroa" />
        {isStart
            ? <Game/>
            : <>
                <h1>MINI-GAME</h1>
                <button onClick={() => SetIsStart(true)}>Iniciar</button>
              </>
        }
      </div>
    </>
  )
}