import React, { useState, useEffect } from 'react'
import classes from './signup.module.css'
import { Link, useHistory } from 'react-router-dom'
import { signup } from '../../features/counter/leaderBoardAPIs'
import PasswordStrengthBar from 'react-password-strength-bar';

const Signup = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [dupPassword, setDupPassword] = useState('')
  const [score, setScore] = useState(0)

  const [passError, setPassError] = useState('')

  useEffect(() => {
    let login = window.localStorage.getItem('login')
    let token = login ? JSON.parse(login).token : ''
    if (token) {
      history.push('/')
    }
    // eslint-disable-next-line
  }, [])

  const singupHandler = (e: any) => {
    e.preventDefault()
    console.log(email, password)
    signup({ login: email, password }, () => {
      history.push('login')
    })
  }

  const handleChangeScore = (score: any) => {
    if (score < 2 && password.length > 3) {
      setPassError("Try adding special characters or numbers in password to make it strong")
    }
    else {
      setPassError("")
    }
    setScore(score)
  }

  const onDupPassChange = (e: any) => {
    setDupPassword(e.target.value)
  }

  return (
    <div className={classes.signup}>
      <div className={classes.register}>
        <form onSubmit={singupHandler}>
          <h2>Sign Up</h2>

          <div className='form-group'>
            <label>User Name</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type='username'
              className='form-control'
              placeholder='Enter username'
            />
          </div>

          <div className='form-group'>
            <label>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              className='form-control'
              placeholder='password'
            />
            <small className="form-text text-muted">{passError}</small>
            <PasswordStrengthBar onChangeScore={handleChangeScore} password={password} />

          </div>
          <div className='form-group'>
            <label>Re-enter Password</label>
            <input
              onChange={onDupPassChange}
              type='password'
              className='form-control'
              placeholder='password'
            />
            <small className="form-text text-muted">{password !== dupPassword && dupPassword.length > 0 ? "Passwords do not match" : ""}</small>
          </div>
          <div className={classes.left}>
            <div>
              <button
                disabled={score < 2 || !email || password !== dupPassword}
                type='submit'
                className='btn btn-primary '
              >
                Submit
              </button>
            </div>
            <div className={classes.margin}>
              <Link to='/'>
                <p className='forgot-password '>
                  Cancel
                </p>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
