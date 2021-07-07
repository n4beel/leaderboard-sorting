import React, { useState, useEffect } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import { useHistory } from 'react-router-dom'
import classes from './index.module.css'
import { dataleaderboard } from '../../features/counter/leaderBoardAPIs'

const Leaderborad = () => {
  const history = useHistory()
  const [field, setField] = useState('rank')
  const [leaderboardData, setLeaderboardData] = useState<any[]>()

  useEffect(() => {
    ; (async () => {
      let login = window.localStorage.getItem('login')
      let token = login ? JSON.parse(login).token : ''
      console.log(token)
      if (token === '') {
        console.log('no token')
        history.push('/login')
      }
      else {
        let data = await dataleaderboard(token)
        setLeaderboardData(data)
      }
    })()
    // eslint-disable-next-line
  }, [])

  const logoutHandler = () => {
    localStorage.clear()
    history.push('/login')
  }

  const handleSort = (field: any) => {
    setField(field)
  }

  const columns = [
    {
      dataField: 'rank',
      text: 'Rank',
      sort: true,
    },
    {
      dataField: 'score',
      text: 'Points',
      sort: true,
    },
    {
      dataField: 'firstName',
      text: 'Name',
      sort: true,
    },
    {
      dataField: 'age',
      text: 'Age',
      sort: true,
    },
  ]

  return (
    <div className={classes.table}>
      <div className={classes.header}>
        <h1>Leaderboard</h1>
      </div>
      <div className={classes.logout}>
        <button className='btn btn-primary' onClick={logoutHandler}>
          Logout
        </button>
      </div>
      <div className={classes.payload}>
        <button className='btn btn-primary mx-2' onClick={() => handleSort('rank')}>
          Rank
        </button>
        <button className='btn btn-primary mx-2' onClick={() => handleSort('score')}>
          Point
        </button>
        <button className='btn btn-primary mx-2' onClick={() => handleSort('firstName')}>
          Name
        </button>
        <button className='btn btn-primary mx-2' onClick={() => handleSort('age')}>
          Age
        </button>
      </div>
      <div className={classes.field}>
        <BootstrapTable
          keyField='rank'
          data={leaderboardData ? leaderboardData : []}
          columns={columns}
          defaultSorted={[
            {
              dataField: 'rank',
              order: 'asc',
            },
          ]}
          sort={{
            dataField: field,
            order: 'asc',
          }}
        />
      </div>
    </div>
  )
}

export default Leaderborad
