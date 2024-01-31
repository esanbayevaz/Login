import React, { useContext } from 'react'
import { Context } from '../../context/context'
import { loggedOutAction } from '../../reducer/tokenReducer/action'
import { useNavigate } from 'react-router-dom'

function Layout() {
  const { tokenState, tokenDispatch } = useContext(Context)
  const navigate = useNavigate()
  const logOutHandler = () => {
    tokenDispatch(loggedOutAction())
    navigate('/login')
  }

  return (
    <div className='w-[300px] min-h-[100vh] bg-emerald-500 '>
      <h1 className=' text-2xl p-2'>Layout qismi</h1>
      <button className='w-44 h-8 shadow-xl rounded-md bg-red-300 m-2' onClick={logOutHandler}>Logout</button>

    </div>
  )
}

export default Layout