import './App.css'
import { useEffect, useState } from 'react'
import Login from './pages/Login/Login'
import { Route, Switch } from 'react-router-dom'
import Signup from './pages/Signup/Signup'
import Leaderborad from './pages/Leaderboard'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [user, setUser] = useState('')

  useEffect(() => {
    let login = window.localStorage.getItem('login')
    setUser(login ? JSON.parse(login).token : '')
    console.log(login)
  }, [])

  return (
    <div className='App'>
      <ToastContainer position='top-right' />
      <Switch>
        <Route path='/' exact>
          <Leaderborad />
        </Route>
        <Route path='/Signup'>
          <Signup />
        </Route>
        <Route path='/Login'>
          <Login />
        </Route>
      </Switch>
    </div>
  )
}

export default App
