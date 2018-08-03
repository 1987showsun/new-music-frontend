import React        from 'react';

import Inc_index    from './inc';
import Album_Index  from './album';
import Team_Index   from './teams';

export default class Index extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            match      : props.match,
            components : {
                incs   : Inc_index,
                albums : Album_Index,
                teams  : Team_Index,
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            match : nextProps.match
        })
    }

    selectRenderComponent(){
        let match         = this.state.match;
        let page          = match['params']['page'];
        let ComponentName = this.state.components[page];
        return <ComponentName match={match}/>;
    }

    render(){
        return this.selectRenderComponent();
    }
}