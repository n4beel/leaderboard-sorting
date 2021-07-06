import './App.css'
import Login from './pages/Login/Login'
import { Route, Switch } from 'react-router-dom'
import Signup from './pages/Signup/Signup'
import Leaderborad from './pages/Leaderboard'

function App() {
  return (
    <div className='App'>
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
