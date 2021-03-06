
import { useContext } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import { publicRoutes } from "../routes";
import { SHOP_ROUTE } from '../utils/consts';
import { Context } from '../index';

const AppRouter = () => {
  let {user} = useContext(Context)

  console.log(user);
  return (
    <Switch>
      {/* {user.isAuth && authRoutes.map(({path, Component}) => 
        <Route  path = {path} component= {Component} exact/>
      )} */}
      {publicRoutes.map(({path, Component}) => 
        <Route  path = {path} component= {Component} exact/>
      )}
      <Redirect to = {SHOP_ROUTE}/>
    </Switch>
  );
}

export default AppRouter;