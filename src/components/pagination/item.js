import React from 'react';
import { Link } from 'react-router-dom';

export default class PaginationItem extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            path           : props.path           || "",
            text           : props.text           || ""
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            path           : nextProps.path  || "",
            text           : nextProps.text  || ""
        })
    }

    callback( selectedCP ){
        this.props.callback(selectedCP);
    }

    render(){
        return(
            <li>
                <Link className={`${ this.state.text==this.props.currentPage? "active" : "" }`} to={`${this.state.path}/${this.state.text}`} onClick={this.callback.bind(this,this.state.text)}>{this.state.text}</Link>
            </li>
        );
    }
}