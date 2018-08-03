import React from 'react';
import { connect } from 'react-redux';

class Teams_tool extends React.Component{
    render(){
        return(
            <div className="page_tool">
                teams
            </div>
        );
    }
}

const mapStateToProps = () => {
    return{

    }
}

export default connect(mapStateToProps)(Teams_tool);