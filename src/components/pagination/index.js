import React from 'react';

import Item from './item';

import './pagination.scss';

export default class Pagination extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            match           : props.match || {},
            path            : props.path  || "",
            total           : props.total || 0,
            limit           : props.limit || 0,
            pagination      : [],
        }
    }

    componentDidMount() {
        this.paginationPush();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            total           : nextProps.total,
            limit           : nextProps.limit,
            match           : nextProps.match || {},
            path            : nextProps.path  || "",
        },()=>{
            this.paginationPush();
        })
    }

    paginationPush(){
        const pagination = [];
        const total      = this.state.total;
        const limit      = this.state.limit;
        const totalPage = Math.ceil(total/limit);

        for( let i=0 ; i < totalPage ; i++ ){
            pagination.push( <Item key={i} text={i+1} path={this.state.path} callback={this.callback.bind(this)} currentPage={this.props.currentPage}/> );
        }
        
        this.setState({
            pagination
        })
    }

    callback( selectedCP ){
        let match   = this.state.match;
        let current = match['params']['current'];
        if( current!=selectedCP ){
            this.props.reload( true,selectedCP );
        }
    }

    render(){
        return(
            <div className="pagination-wrap">
                <ul className="pagination-ul">
                    {this.state.pagination}
                </ul>            
            </div>
        );
    }
}