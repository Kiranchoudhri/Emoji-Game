// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, gameOver} = props
  const displayScore = gameOver ? 0 : score
  return (
    <div className="navContainer">
      <div className="gameLogoContainer">
        <img
          className="emojiLogo"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1 className="gameTitle">Emoji Game</h1>
      </div>
      {gameOver === false && (
        <div className="navText">
          <p className="score">Score: {displayScore}</p>
          <p className="topScore">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
