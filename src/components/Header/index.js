import './index.css'

const Header = props => {
  const {timer, score} = props
  return (
    <nav className="nav-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <div className="score-timer-container">
        <p className="score-text">
          Score: <span className="span">{score}</span>
        </p>
        <div className="timer-container">
          <img
            className="timer-logo"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <span className="span">{timer} sec</span>
        </div>
      </div>
    </nav>
  )
}

export default Header
