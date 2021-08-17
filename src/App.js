import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
//data
import JsonData from './MOCK_DATA.json'
//styles
import './app.css'

const App = () => {

  const [users, setUsers] = useState(JsonData.slice(0, 50))
  const [pageNumber, setPageNumber] = useState(0)

  const usersPage = 10
  const pagesVisited = pageNumber * usersPage
  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPage)
    .map(user => {
      return (
        <div className='user'>
          <h3>{user.firstName}</h3>
          <h3>{user.lastName}</h3>
          <h3>{user.email}</h3>
        </div>
      )
    })

  const pageCount = Math.ceil(users.length / usersPage)
  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <div className='App'>
      {displayUsers}
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'paginationBttns'}
        previousLinkClassName={'previousBttn'}
        nextLinkClassName={'nextBttn'}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  )
}

export default App
