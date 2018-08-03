import React from 'react';
import Axios from 'axios';

export default class ManageSigin extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            formObject : {
                username  : "",
                password  : ""
            }
        }
    }

    handleChange(e){
        let formObject = Object.assign({},this.state.formObject);
        const name     = e.target.name;
        const value    = e.target.value;
        formObject[name] = value;
        this.setState({
            formObject
        })
    }

    handleSubmit(e){
        e.preventDefault();
        Axios.post('http://localhost:8080/api/login',this.state.formObject).then(res=>{
            this.props.loginStatus(res['data']);
        });
    }

    render(){
        return(
            <div id="login">
                <div className="login-wrap">
                    <div className="title">
                        <h4>管理者登入</h4>
                    </div>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <ul className="login-form-ul">
                            <li>
                                <input type="text" name="username" value={this.state.formObject['username']} onChange={this.handleChange.bind(this)} />
                            </li>
                            <li>
                                <input type="text" name="password" value={this.state.formObject['password']} onChange={this.handleChange.bind(this)} />
                            </li>
                            <li>
                                <button type="submit">登入</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}