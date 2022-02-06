import React, { useContext, useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {observer} from "mobx-react-lite"
import { Context } from ".";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";


const App = observer (() => {
  let {user} = useContext(Context)
  let [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
    check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
  } ,1000)
}, [])
  
    

  if(loading) {
    return <Spinner animation = {"grow"}></Spinner>
  }
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
     <AppRouter />
     </BrowserRouter>
    </div>
  );
})

export default App;
