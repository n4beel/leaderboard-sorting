import React from 'react'
import classes from './signup.module.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className={classes.signup}>
      <div className={classes.register}>
        <form>
          <h2>Sign Up</h2>

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
              <Link to='/'>
                <p className='forgot-password '>
                  <a href='#'>Cancel</a>
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
