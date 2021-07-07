import React, { useState, useEffect } from 'react'
import classes from './signup.module.css'
import { Link, useHistory } from 'react-router-dom'
import { signup } from '../../features/counter/leaderBoardAPIs'

const Signup = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    let login = window.localStorage.getItem('login')
    let token = login ? JSON.parse(login).token : ''
    if (token) {
      history.push('/')
    }
  }, [])

  const singupHandler = (e: any) => {
    e.preventDefault()
    console.log(email, password)
    signup({ login: email, password }, () => {
      history.push('login')
    })
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
              placeholder='Enter password'
            />
          </div>
          <div className={classes.left}>
            <div>
              <button
                disabled={!password || !email}
                type='submit'
                className='btn btn-primary '
              >
                Submit
              </button>
            </div>
            <div className={classes.margin}>
              <Link to='/'>
                <p className='forgot-password '>
                  <a>Cancel</a>
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
