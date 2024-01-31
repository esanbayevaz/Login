import { Route, Routes } from "react-router-dom"
import Login from "./pages/login/Login"
import Layout from "./containers/layout/Layout"
import Sidebar from "./pages/sidebar/Sidebar"
import ProtektedRoutes from "./routes/ProtektedRoutes"
import { Context } from "./context/context"
import { useEffect, useReducer } from "react"
import { tokenInitialState, tokenReducer } from "./reducer/tokenReducer/tokenReducer"



function App() {
  const [tokenState,tokenDispatch]=useReducer(tokenReducer,tokenInitialState)


  useEffect(()=>{
    localStorage.setItem("token",JSON.stringify(tokenState.token))
  },[tokenState.token])
  return (
    <Context.Provider value={{tokenState,tokenDispatch}}>
    <Routes>
      <Route path="login" element={<Login/>}/>

      <Route element={<ProtektedRoutes/>}>
                <Route path="/" element={<Layout/>}/>
                <Route path="sidebar" element={<Sidebar/>}/>
      </Route>


    </Routes>

    </ Context.Provider>
  )
}

export default App
