import React               from 'react';
import { connect }         from 'react-redux';

import Incs_tool           from './incs';
import Teams_tool          from './teams';
import Albums_tool         from './albums';

import './tool.scss';

class Index extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            match : props.match,
            components : {
                collections : {
                    incs      : Incs_tool,
                    teams     : Teams_tool,
                    albums    : Albums_tool,
                }
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            match : nextProps.match,
        })
    }

    selectRenderComponent(){
        let match         = this.state.match;
        let type          = match['path'].split('/')[1];
        let page          = match['params']['page'];
        let ComponentName = this.state.components[type][page];
        return <ComponentName match={match}/>;
    }

    render(){
        return this.selectRenderComponent();
    }
}

const mapStateToProps = () => {
    return{
    }
}

export default connect(mapStateToProps)(Index);