import './index.css'

const ThumbnailItem = props => {
  const {thumbNailDetails, onUpdateState, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbNailDetails

  const imgClassName = isActive ? 'img active' : 'img'

  const onClickId = () => {
    onUpdateState(id)
  }

  return (
    <li>
      <button type="button" className="btn-item" onClick={onClickId}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={imgClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
