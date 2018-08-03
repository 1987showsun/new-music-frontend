import React       from 'react';
import { connect } from 'react-redux';

//Components
import Tool        from '../tool';


export default class Album_index extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            match : props.match
        }
    }

    render(){
        return(
            <main>
                <div className="main-block">
                    <Tool match={this.state.match}/>
                </div>
            </main>
        );
    }
}