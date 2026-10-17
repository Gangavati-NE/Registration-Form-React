import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameError: false,
    lastNameError: false,
    isSubmitted: false,
  }

  onChangeFirstName = event => {
    this.setState({
      firstName: event.target.value,
      firstNameError: false,
    })
  }

  onChangeLastName = event => {
    this.setState({
      lastName: event.target.value,
      lastNameError: false,
    })
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    this.setState({firstNameError: firstName.trim() === ''})
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    this.setState({lastNameError: lastName.trim() === ''})
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {firstName, lastName} = this.state
    const firstNameError = firstName.trim() === ''
    const lastNameError = lastName.trim() === ''

    this.setState({
      firstNameError,
      lastNameError,
      isSubmitted: !firstNameError && !lastNameError,
    })
  }

  onClickSubmitAnotherResponse = () => {
    this.setState({
      firstName: '',
      lastName: '',
      firstNameError: false,
      lastNameError: false,
      isSubmitted: false,
    })
  }

  render() {
    const {
      firstName,
      lastName,
      firstNameError,
      lastNameError,
      isSubmitted,
    } = this.state

    return (
      <div className="registration-app-container">
        <div className="registration-form-container">
          <h1 className="registration-heading">Registration</h1>

          {isSubmitted ? (
            <div className="success-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="success-image"
              />
              <p className="success-message">Submitted Successfully</p>
              <button
                type="button"
                className="submit-another-button"
                onClick={this.onClickSubmitAnotherResponse}
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <form className="registration-form" onSubmit={this.onSubmitForm}>
              <div className="input-container">
                <label htmlFor="firstName" className="input-label">
                  FIRST NAME
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First name"
                  className={`form-input ${
                    firstNameError ? 'input-error' : ''
                  }`}
                  value={firstName}
                  onChange={this.onChangeFirstName}
                  onBlur={this.onBlurFirstName}
                />
                {firstNameError && <p className="error-message">Required</p>}
              </div>

              <div className="input-container">
                <label htmlFor="lastName" className="input-label">
                  LAST NAME
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                  className={`form-input ${lastNameError ? 'input-error' : ''}`}
                  value={lastName}
                  onChange={this.onChangeLastName}
                  onBlur={this.onBlurLastName}
                />
                {lastNameError && <p className="error-message">Required</p>}
              </div>

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
