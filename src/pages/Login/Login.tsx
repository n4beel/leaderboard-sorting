import React from 'react'
import classes from './Login.module.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className={classes.login}>
      <div className={classes.box}>
        <form>
          <h2>Log In</h2>

          <div className='form-group'>
            <label>User Name</label>
            <input
              type='username'
              className='form-control'
              placeholder='Enter username'
            />
          </div>

          <div className='form-group'>
            <label>Password</label>
            <input
              type='password'
              className='form-control'
              placeholder='Enter password'
            />
          </div>
          <div className={classes.left}>
            <div>
              <button type='submit' className='btn btn-primary '>
                Submit
              </button>
            </div>
            <div className={classes.margin}>
              <Link to='/Signup'>
                <p className='forgot-password '>
                  <a href='#'>Register</a>
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
