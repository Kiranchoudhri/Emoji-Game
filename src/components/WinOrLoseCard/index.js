// Write your code here.
import './index.css'

const WinOrLooseCard = props => {
  const {score, topScore, playAgain} = props

  const resetGame = () => {
    playAgain()
  }

  const gameResult = score === 12 ? 'You Won' : 'You Lose'
  const resultUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const textContent = score === 12 ? 'Best Score' : 'Score'
  const altText = score === 12 ? 'win' : 'lose'

  return (
    <div className="resultCard">
      <div className="scoreCard">
        <h1 className="winTitle">{gameResult}</h1>
        <p className="bestScore">{textContent}</p>
        <p className="scored">{score}/12</p>
        <button type="button" className="playAgainBtn" onClick={resetGame}>
          Play Again
        </button>
      </div>
      <div className="scoreCardImage">
        <img alt={altText} className="resultImage" src={resultUrl} />
      </div>
    </div>
  )
}

export default WinOrLooseCard
