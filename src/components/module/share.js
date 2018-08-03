import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Share extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data : props.data || []
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            data : nextProps.data
        })
    }

    render(){
        let shareBtn = [];
        this.state.data.map((item,i)=>{
            if( item['url']!="" ){
                shareBtn.push( <a key={i} href={item['url']} target="_blank" className="btn share">{ item['type'] }</a> );
            }
        })

        return shareBtn;
    }
}

const mapStateToProps = state => {
    return{

    }
}

export default connect(mapStateToProps)(Share);