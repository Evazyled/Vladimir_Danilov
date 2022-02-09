import React ,{useContext, useState} from "react";
import { Container,Form } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import { NavLink, useHistory, useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";



const Auth = observer( () => {
  let {user} = useContext(Context)
  let location = useLocation()
  let history = useHistory()
  let isLogin = location.pathname === LOGIN_ROUTE
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [emailDirty,setEmailDirty] = useState(false)
  let [passwordDirty,setPasswordDirty] = useState(false)
  let [emailError, setEmailError] = useState('Email не может быть пустым')
  let [passwordError, setPasswordError] = useState('Пароль не может быть пустым')

  let emailHandler = (e) => {
    setEmail(e.target.value)
    
  let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некоректный email")
    } else {
      setEmailError('')
    }

  }

  let passwordHandler = (e) => {
    setPassword(e.target.value)
    if(!e.target.value) {
      return  setPasswordError('Пароль не может быть пустым')
    }  else if (e.target.value.length < 8 ) {
       
       return setPasswordError("Пароль должен содержать не менее 8 символов")
     }  else {
      return setPasswordError('')
     }
    
  }


  let blurHandler = (e) => {
    switch(e.target.name) {
      case "email" :
      setEmailDirty(true)
      break
      case 'password': 
      setPasswordDirty(true)
      break
    }
  }

  let click = async () => {
    try {
      let data
    if(isLogin) {
      data = await login(email, password);
      // history.push(SHOP_ROUTE)
      // console.log(data)
     } else {
       data = await registration(email, password)
       
    //  history.push(SHOP_ROUTE)
        
     }
     user.setUser(user)
     user.setIsAuth(true)
     history.push(SHOP_ROUTE)
    } catch (e) {
        alert(e.response.data.message)
    }

  }
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style = {{height: window.innerHeight - 54}}
    >

        <Card style = {{width: 600}} className = 'p-5'>
          <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
          <Form className="d-flex flex-column">
            {(emailDirty && emailError) && <div style = {{color:"red"} }>{emailError}</div>}
            <Form.Control
            className="mt-3"
             placeholder="Введите ваш email..."
             name = 'email'
             value = {email}
             onBlur = {e => blurHandler(e)}
             onChange={e => emailHandler(e)}
             
             />
             
              
             {(passwordDirty && passwordError) && <div style = {{color:"red"} }>{passwordError}</div>}
            <Form.Control
            className="mt-3"
             placeholder="Введите ваш пароль..."
             name = 'password'
             value = {password}
             
             onBlur = {e => blurHandler(e)}
             onChange={e => passwordHandler(e)}
             type= 'password'
             /> 
            
            
          </Form>
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
              {isLogin ? 
              <div>
              Нет аккаунта? <NavLink to = {REGISTRATION_ROUTE}>Зарегистрируйся</NavLink>
            </div>
            :
            <div>
                Есть аккаунт? <NavLink to = {LOGIN_ROUTE}>Войдите</NavLink>
              </div>
            }

              <Button 
              
              variant = {'outline-success'}
              onClick = {click}
              >
                {isLogin ? "Войти" : "Регистрация"}
              </Button>
            </Row>
        </Card>
      </Container>
  );
})

export default Auth;