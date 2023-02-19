import './index.css'

const MatchGame = props => {
  const {imageDetails, updateNewThumbnail} = props
  const {thumbnailUrl, category} = imageDetails
  console.log(imageDetails)

  const onClickThumbnail = () => {
    updateNewThumbnail(thumbnailUrl)
  }
  return (
    <li className="image-list-item">
      <button
        type="button"
        className="thumbnail-btn"
        onClick={onClickThumbnail}
      >
        <img src={thumbnailUrl} alt={category} className="thumbnail-img" />
      </button>
    </li>
  )
}

export default MatchGame
