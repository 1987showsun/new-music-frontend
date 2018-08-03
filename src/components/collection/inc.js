import React       from 'react';
import { connect } from "react-redux";

//Components
import List        from '../list';
import Tool        from '../tool';

//Actions
import { list }    from '../../actions/list';

//JsonS
import  columns    from '../../public/json/list_theader.json';

class Inc_index extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            match       : props.match,
            currentPage : props.match['params']['current'] || 1,
            total       : props.total,
            limit       : 10,
            columns     : columns[ props.match['params']['page'] ],
            list        : props.list,
        }
    }

    componentDidMount() {
        this.reloadAData();
    }

    componentWillReceiveProps(nextProps) {
        this.rearrange(nextProps.listData);
        this.setState({
            match       : nextProps.match,
            currentPage : nextProps.match['params']['current'] || 1,
            total       : nextProps.total,
            list        : nextProps.list
        });
    }

    componentDidUpdate(prevProps, prevState) {
        const current     = prevState.currentPage;
        const currentPage = this.state.currentPage;
        if( current!=currentPage ){
            this.reloadAData();
        }
    }

    rearrange( status ){
    }

    reloadAData( status,selectedCP ){
        let match       = this.state.match;
        let currentPage = this.state.currentPage;
        if( status ){
            currentPage = selectedCP;
            match['params']['current'] = selectedCP || 1;
        }
        
        this.setState({
            currentPage,
            match
        },()=>{
            this.props.dispatch( list(match,this.state.limit) );
        })
    }

    render(){
        return(
            <main>
                <div className="main-block title">
                    <h4>唱片公司</h4>
                    <ul className="tool">
                        <li><span className="btn add">新增</span></li>
                    </ul>
                </div>
                <div className="main-block">
                    <Tool match={this.state.match}/>
                    <List 
                        match          = {this.state.match}
                        total          = {this.state.total}
                        limit          = {this.state.limit}
                        columns        = {this.state.columns}
                        data           = {this.state.list}
                        paginationPath = {`/collections/${this.state.match['params']['page']}`}
                        currentPage    = { this.state.currentPage }
                        reload         = { this.reloadAData.bind(this) }
                    />
                </div>
                <div className="main-block">
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        currentPage : state.list.currentPage,
        total       : state.list.total,
        limit       : state.list.limit,
        list        : state.list.incs,
    }
}

export default connect(mapStateToProps)(Inc_index);