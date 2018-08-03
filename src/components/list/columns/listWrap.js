import React from "react";

import ListItem from "./listItem";

export default class listWrap extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            columns : props.columns || [],
            data    : props.data    || [],
            sort    : props.sort
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            columns : nextProps.columns  || [],
            data    : nextProps.data     || [],
        })
    }

    render(){
        return(
            <ul className="list-ul">
                {
                    this.state.columns.map((item,i)=>{
                        return (
                            <ListItem 
                                key          = {i} 
                                tHead        = {item} 
                                tBody        = {this.state.data} 
                                sort         = {this.state.sort} 
                                returnSataus = {this.props.returnSataus}
                            />
                        );
                    })
                }
            </ul>
        )
    }
}