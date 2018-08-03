import React,{Component}           from 'react';

import Pagination                  from '../pagination';
import ListWrap                    from './columns/listWrap';
import BlockWrap                   from './block/blockWrap';

import "./list.scss";

export default class List extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            typeStyle      : props.typeStyle  || "list",
            total          : props.total      || 99,
            limit          : props.limit      || 10,
            path           : props.path       || "",
            match          : props.match      || {},
            columns        : props.columns    || [],
            data           : props.data       || [],
            class          : props.class      || "",
            sort           : props.columns!=undefined? props.columns.map((item,i)=>{
                return {[item['columnKey']]:0}
            }) : {},
            paginationPath : props.paginationPath || "normal"
        }
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            total          : nextProps.total   || 0,
            limit          : nextProps.limit   || 0,
            path           : nextProps.path    || "",
            match          : nextProps.match   || {},
            columns        : nextProps.columns || [],
            data           : nextProps.data    || [],
            paginationPath : nextProps.paginationPath || ""
        })
    }

    sortStatus( key,val ){
        let sort = this.state.sort;
        sort.filter( item => {
            if( Object.keys(item)==key ){
                return item[key] = val;
            }else{
                return item[Object.keys(item)] = 0;
            }
        })

        this.setState({
            sort
        },()=>{
            this.reSortListData();
        })
    }

    reSortListData(){
        let data = this.state.data;
    }

    render(){
        switch ( this.state.typeStyle ) {
            case "list":
                return(
                    <div className="list-wrap">
                        <ListWrap sort={this.state.sort} columns={this.state.columns} data={this.state.data} returnSataus={ this.sortStatus.bind(this) }/>
                        <Pagination total={this.state.total} limit={this.state.limit} match={this.state.match} path={this.state.paginationPath} reload={this.props.reload} currentPage={this.props.currentPage}/>
                    </div>
                );
                break;
        
            default:
                return(
                    <div className="list-wrap">
                        <BlockWrap className={this.state.class} columns={this.state.columns} data={this.state.data}/>
                        <Pagination total={this.state.total} limit={this.state.limit} match={this.state.match} path={this.state.paginationPath} reload={this.props.reload} currentPage={this.props.currentPage}/>
                    </div>
                );
                break;
        }
    }
}