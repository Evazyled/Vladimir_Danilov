import React, { useContext } from "react";
import { Context } from "../index";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import Button from 'react-bootstrap/Button'
import { observer} from "mobx-react-lite";
import { useHistory } from "react-router-dom";

const NavBar = observer(() => {
    const {user } = useContext(Context)
    let history = useHistory()

    let logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
    }
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
   <Nav.Link to = {SHOP_ROUTE}>Электрон</Nav.Link>
   {user.isAuth ? 
   <Nav className="ml-auto">
      
      <Button
       variant={"outline-light"}
       onClick={() => logOut()} 
       className="mx-2">
           Выйти
       </Button>
    </Nav>
    : 
    <Nav className="ml-auto">
      <Button variant="outline-light" onClick = {() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
    </Nav>
    }
    
    </Container>
  </Navbar>
  );
})

export default NavBar;