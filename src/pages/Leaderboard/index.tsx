import React, { useState } from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import classes from './index.module.css'

interface Product {
  field: string
  order: string
}

const Leaderborad = () => {
  const [state, setState] = useState<Product>({
    field: '',
    order: '',
  })

  const handleSort = (field: any, order: any) => {
    setState({
      field,
      order,
    })
  }

  const handleSortById = () => {
    setState({
      field: 'id',
      order: 'desc',
    })
  }

  const products = [
    {
      id: 0,
      name: 'Ammar',
      price: 100,
    },
    {
      id: 1,
      name: 'Ammar',
      price: 100,
    },
    {
      id: 2,
      name: 'Ammar',
      price: 100,
    },
    {
      id: 3,
      name: 'Ammar',
      price: 100,
    },
  ]

  const columns = [
    {
      dataField: 'id',
      text: 'Product ID',
      sort: true,
      onSort: handleSort,
    },
    {
      dataField: 'name',
      text: 'Product Name',
      sort: true,
      onSort: handleSort,
    },
    {
      dataField: 'price',
      text: 'Product Price',
    },
  ]

  return (
    <div className={classes.table}>
      <div className={classes.header}>
        <h1>Leaderboard</h1>
      </div>
      <div className={classes.payload}>
        <button className='btn btn-primary mx-2' onClick={handleSortById}>
          Rank
        </button>
        <button className='btn btn-primary mx-2' onClick={handleSortById}>
          Point
        </button>
        <button className='btn btn-primary mx-2' onClick={handleSortById}>
          Name
        </button>
        <button className='btn btn-primary mx-2' onClick={handleSortById}>
          Age
        </button>
      </div>
      <div className={classes.field}>
        <BootstrapTable
          keyField='id'
          data={products}
          columns={columns}
          // sort={{
          //   dataField: state.field,
          //   order: state.order,
          // }}
        />
      </div>
    </div>
  )
}

export default Leaderborad
