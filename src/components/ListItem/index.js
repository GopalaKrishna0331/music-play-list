import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const ListItem = props => {
  const {each, updateNewList} = props
  const {id, imageUrl, name, genre, duration} = each
  const onClickDeleteButton = () => {
    updateNewList(id)
  }

  return (
    <li className="list">
      <div className="list-element-container">
        <div className="image-element">
          <img src={imageUrl} alt="track" className="track" />
          <div>
            <p className="name">{name}</p>
            <p className="genre">{genre}</p>
          </div>
        </div>
        <div className="delete-container">
          <p className="duration">{duration}</p>
          <button
            className="delete-button"
            type="button"
            onClick={onClickDeleteButton}
            data-testid="delete"
          >
            <AiOutlineDelete size="15px" color="#ffffff" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default ListItem
