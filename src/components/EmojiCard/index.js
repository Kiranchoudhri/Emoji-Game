// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiData, verifyEmoji, shuffledEmojisList} = props
  const {emojiName, emojiUrl, id} = emojiData

  const onClickChangeEmoji = () => {
    verifyEmoji(id)
    shuffledEmojisList()
  }

  return (
    <li className="emojiCard">
      <button type="button" className="emojiCardBtn">
        <img
          alt={emojiName}
          className="emojiImage"
          src={emojiUrl}
          onClick={onClickChangeEmoji}
        />
      </button>
    </li>
  )
}

export default EmojiCard
