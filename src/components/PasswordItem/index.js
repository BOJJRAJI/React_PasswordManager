import './index.css'

const PasswordItem = props => {
  const {item, deleteItem, showPasswords} = props
  const {id, password, username, website, profileBgCl} = item
  console.log(showPasswords)

  return (
    <li className="list-item">
      <div className="content-container">
        <p className={profileBgCl}>{username[0]}</p>
        <div>
          <p className="website">{website}</p>
          <p className="name">{username}</p>
          {showPasswords ? (
            <p className="password">{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="star-image"
            />
          )}
        </div>
      </div>

      <button
        className="delete-button"
        type="button"
        onClick={() => deleteItem(id)}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default PasswordItem
