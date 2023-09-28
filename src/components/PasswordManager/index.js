import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem'

import './index.css'

const colours = ['red', 'green', 'yellow', 'orange', 'blue', 'skyblue']
class PasswordManager extends Component {
  state = {
    data: [],
    website: '',
    username: '',
    password: '',
    searchInput: '',
    showPasswords: false,
  }

  getWebsite = e => {
    this.setState({website: e.target.value})
  }

  getUsername = e => {
    this.setState({username: e.target.value})
  }

  getPassword = e => {
    this.setState({password: e.target.value})
  }

  getSearchInput = e => {
    this.setState({searchInput: e.target.value})
  }

  addData = e => {
    e.preventDefault()
    const {username, website, password} = this.state
    const color = Math.floor(Math.round(colours.length * 10))
    console.log(colours[color])

    if (username !== '' && website !== '' && password !== '') {
      const user = {
        id: v4(),
        website,
        username,
        password,
        profileBgCl: colours[2],
      }

      this.setState(prevState => ({
        data: [...prevState.data, user],
        website: '',
        username: '',
        password: '',
      }))
    }
  }

  deleteItem = id => {
    const {data} = this.state
    const filterData = data.filter(item => item.id !== id)
    this.setState({data: filterData})
  }

  toggleShowPasswords = () => {
    this.setState(prevState => ({showPasswords: !prevState.showPasswords}))
  }

  render() {
    const {
      data,
      username,
      website,
      searchInput,
      password,
      showPasswords,
    } = this.state

    const filterSearchData = data.filter(item =>
      item.username.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="app-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
        </div>

        <div className="app-container">
          <form className="form" onClick={this.addData}>
            <h1 className="form-heading">Add New Password</h1>
            <div className="icon-input-container">
              <div className="icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="icon"
                />
              </div>

              <input
                className="input-element"
                type="text"
                placeholder="Enter Website"
                value={website}
                onChange={this.getWebsite}
              />
            </div>
            <div className="icon-input-container">
              <div className="icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="icon"
                />
              </div>

              <input
                className="input-element"
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={this.getUsername}
              />
            </div>
            <div className="icon-input-container">
              <div className="icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="icon"
                />
              </div>

              <input
                className="input-element"
                placeholder="Enter Password"
                value={password}
                onChange={this.getPassword}
                type="password"
              />
            </div>
            <div className="button-container">
              <button className="add-button" type="submit">
                Add
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="password-manager-image"
          />
        </div>
        <div className="password-things-container">
          <div className="count-search-container">
            <div className="para-button-container">
              <h1 className="count-para">Your Passwords</h1>
              <p className="count-button">{filterSearchData.length}</p>
            </div>

            <div className="search-container">
              <div className="search-icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-icon"
                />
              </div>
              <input
                className="search-input"
                placeholder="Search"
                type="search"
                value={searchInput}
                onChange={this.getSearchInput}
              />
            </div>
          </div>
          <hr className="hr-line" />
          <div className="show-passwords-container">
            <input
              type="checkbox"
              className="checkbox"
              value={showPasswords}
              onChange={this.toggleShowPasswords}
              id="checkbox"
            />
            <label htmlFor="checkbox" className="show-para">
              Show Passwords
            </label>
          </div>

          {filterSearchData.length === 0 ? (
            <div className="no-passwords-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
                alt="no passwords"
                className="no-passwords-image"
              />
              <p className="form-heading">No Passwords</p>
            </div>
          ) : (
            <ul className="users-data-container">
              {filterSearchData.map(item => (
                <PasswordItem
                  item={item}
                  key={item.id}
                  deleteItem={this.deleteItem}
                  showPasswords={showPasswords}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
