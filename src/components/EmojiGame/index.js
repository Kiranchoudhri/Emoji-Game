import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
import WinOrLooseCard from '../WinOrLoseCard/index'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
// const shuffledEmojisList = () => {
//   const {emojisList} = this.props
//   return emojisList.sort(() => Math.random() - 0.5)
// }
class EmojiGame extends Component {
  state = {clikedEmojiList: [], score: 0, topScore: 0, gameOver: false}

  verifyEmoji = id => {
    const {clikedEmojiList, score, topScore} = this.state
    const containsId = clikedEmojiList.includes(id)
    if (containsId || score === 12) {
      this.setState(prevState => ({
        gameOver: true,
        clikedEmojiList: [],
        // topScore: score > topScore ? score : prevState.topScore,
      }))
    } else {
      this.setState(prevState => ({
        clikedEmojiList: [...prevState.clikedEmojiList, id],
        score: prevState.score + 1,
      }))
    }
  }

  playAgain = () => {
    const {score, topScore} = this.state
    // this.setState({gameOver: false, score: 0})
    this.setState(prevState => ({
      gameOver: false,
      topScore: score > topScore ? score : prevState.topScore,
      score: 0,
    }))
  }

  render() {
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const {emojisList} = this.props
    const {clikedEmojiList, score, gameOver, topScore} = this.state
    console.log(clikedEmojiList, score, gameOver)

    return (
      <div className="bgContainer">
        <NavBar score={score} topScore={topScore} gameOver={gameOver} />
        {gameOver === false ? (
          <div className="emojiWrapper">
            <ul className="emojisContainer">
              {emojisList.map(eachEmoji => (
                <EmojiCard
                  emojiData={eachEmoji}
                  key={eachEmoji.id}
                  verifyEmoji={this.verifyEmoji}
                  shuffledEmojisList={shuffledEmojisList}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className="winOrLooseContainer">
            <WinOrLooseCard
              score={score}
              topScore={topScore}
              playAgain={this.playAgain}
            />
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame
