import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//Components
import Home         from '../home';
import Collection   from '../collection';
import Info         from '../info';

import ManageSigin  from '../login/manage_signin';
import ManageSignup from '../login/manage_signup';

import Header from './header';
import Nav    from './nav';

import "../../../node_modules/antd/dist/antd.css";

export default class Roters extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      code          : sessionStorage.getItem('code') || -1,
      Authorization : ""
    }
  }

  loginStatus( status ){
    const code          = status['code'];
    const Authorization = status['Authorization'];
    sessionStorage.setItem( "code", code);
    sessionStorage.setItem( "Authorization", Authorization);
    this.setState({
      code
    })
  }

  render() {
    if( this.state.code==0 ){
      return (
        <div id="wrapper" className="login">
          <Route component={Header} />
          <Route component={Nav} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/collections/:page" component={Collection} />
            <Route exact path="/collections/:page/:current" component={Collection} />
            <Route exact path="/info/:page/:id" component={Info} />
            <Route exact path="*" render={() => <Redirect to="/" component={Home} /> } />
          </Switch>
        </div>
      );
    }else{
      return (
        <div id="wrapper" className="login">
          <Switch>
            <Route path="/login/sign_in" render={()=> <ManageSigin loginStatus={this.loginStatus.bind(this)}/> } />
            <Route path="/login/sign_up" component={ManageSignup} />
            <Route exact path="*" render={() => <Redirect to="/login/sign_in" component={ManageSigin} /> } />
          </Switch>
        </div>
      );
    }
  }
}
