import React, { useState, useEffect } from 'react'
import classes from './Login.module.css'
import { Link, useHistory } from 'react-router-dom'
import { login } from '../../features/counter/leaderBoardAPIs'

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    let login = window.localStorage.getItem('login')
    let token = login ? JSON.parse(login).token : ''
    if (token) {
      history.push('/')
    }
    // eslint-disable-next-line
  }, [])

  const loginHandler = async (e: any) => {
    e.preventDefault()
    console.log(email, password)
    login({ login: email, password }, () => {
      history.push('/')
    })
  }

  return (
    <div className={classes.login}>
      <div className={classes.box}>
        <form onSubmit={loginHandler}>
          <h2>Log In</h2>

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
              <Link to='/Signup'>
                <p className='forgot-password '>
                  Register
                </p>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
