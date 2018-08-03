import React from 'react';
import { connect } from 'react-redux';

class Album_tool extends React.Component{
    render(){
        return(
            <div className="page_tool">
                incs tool
            </div>
        );
    }
}

const mapStateToProps = () => {
    return{
        
    }
}

export default connect(mapStateToProps)(Album_tool);