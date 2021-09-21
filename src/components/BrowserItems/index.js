import './index.css'

const BrowserItems = props => {
  const {details, deleteItem} = props
  //   console.log(props)
  const {id, timeAccessed, logoUrl, title, domainUrl} = details

  const onDelete = () => {
    deleteItem(id)
    console.log(deleteItem(id))
  }

  return (
    <li className="each-item">
      <p className="item-heading">{timeAccessed}</p>

      <div className="item-content">
        <img src={logoUrl} alt="domain logo" className="item-logo" />

        <div className="center-content">
          <p className="item-heading">{title}</p>
          <p className="item-desc">{domainUrl}</p>
        </div>

        <button
          type="button"
          testid="delete"
          className="button"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-logo"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserItems
