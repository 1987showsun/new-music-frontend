import React        from 'react';

//Components
import Inc          from './inc';
import Team         from './teams';
import Album        from './albums';

export default class Index extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            match      : props.match,
            components : {
                incs   : Inc,
                teams  : Team,
                albums : Album,
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