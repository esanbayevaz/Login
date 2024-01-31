import React, { useContext, useRef } from 'react'
import { Context } from '../../context/context';
import { loggedInAction } from '../../reducer/tokenReducer/action';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const { tokenDispatch } =
   useContext(Context)
  const navigate = useNavigate()
  const tel_ref = useRef()
  const password_ref = useRef()
  const loginHandler = e => {
    e.preventDefault()
    axios.post('',{
      phone_number:tel_ref.current.value,
      password: password_ref.current.value
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
    console.log(({
      phone_number: tel_ref.current.value,
      password: password_ref.current.value
    }))
    // const forma = new FormData(e.target);
    // const { tel, parol } = Object.fromEntries(forma.entries())
    // if (tel == "1" && parol == "1") {
    //   tokenDispatch(loggedInAction())
    //   navigate("/")
    // }
    // else {
    //   alert("xatolik ERROR")
    // }
    // axios.post('',{
    //   tel_number: tel_ref.current.value,
    //   password: password_ref.current.value
    // })
    // .then(res=>console.log(res.data))
    // .catch(console.log(err))

    
  }
  return (
    <div className='w-[500px] h-[380px] shadow-inner bg-slate-100 rounded-lg m-auto text-center items-center'>
      <form onSubmit={(e) => loginHandler(e)} className='flex flex-col gap-6 items-center justify-center '>
        <h1 className='font-bold text-blue-700 text-3xl p-5'>Login</h1>

        <label htmlFor="" className='flex justify-center items-center gap-5'>
          <span className='text-blue-700 text-2xl '>Tel:</span>
          <input required name='tel' 
          ref={tel_ref}
          className=' shadow-2xl hover:border-blue-700 outline-none border-4 rounded-md p-2 w-96' type="tel"
          placeholder='Tel' />
        </label>
        <label htmlFor="" className='flex justify-center items-center '>
          <span className='text-blue-700 text-2xl mr-4'>Parol:</span>
          <input required name='parol' 
          ref={password_ref}
          className=' shadow-2xl hover:border-blue-700 mr-4 outline-none border-4 rounded-md p-2 w-96' type="password" placeholder='Password' />
        </label>

        <button onClick={loginHandler} className=' rounded-md p-2 font-bold text-2xl shadow-2xl text-blue-700 hover:bg-blue-600 hover:text-white bg-white w-44'>Send</button>
      </form>
    </div>
  )
}

export default Login


