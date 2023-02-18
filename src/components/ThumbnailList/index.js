import './index.css'

const ThumbnailList = props => {
  const {imageDetails} = props
  const {thumbnailUrl, category} = imageDetails
  console.log(imageDetails)
  return (
    <li className="image-list-item">
      <button type="button" className="thumbnail-btn">
        <img src={thumbnailUrl} alt={category} className="thumbnail-img" />
      </button>
    </li>
  )
}

export default ThumbnailList
