import React from 'react';
import { Link } from 'react-router-dom';

export default class ListItem extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            tHead                      : props.tHead,
            tHeadKey                   : props.tHead['columnKey'] || "",
            title                      : props.tHead['title']     || "",
            sortSwitch                 : props.tHead['sort']      || false,
            link                       : props.tHead['link']      || false,
            path                       : props.tHead['path']      || "",
            data                       : props.tBody              || [],
            [props.tHead['columnKey']] : 0,
        }
    }

    componentWillReceiveProps(nextProps) {
        let sort     = nextProps.sort;
        let tHeadKey = this.state.tHeadKey;
        sort.filter(item=>{
            if( Object.keys(item)==tHeadKey ){
                this.setState({
                   [ Object.keys(item) ] : item[tHeadKey]
                })
            }
        });

        this.setState({
            tHead : nextProps.tHead,
            data  : nextProps.tBody
        })
    }

    sortACtion(sortKey){
        let sortStatus = this.state[sortKey];
        sortStatus ++;
        if( sortStatus>2 ){
            sortStatus=0;
        }
        this.setState({
            [sortKey] : sortStatus
        },()=>{
            this.props.returnSataus( sortKey,sortStatus );
        })
    }

    sortStatus(){
        let sortStatus = this.state[ this.state.tHeadKey ];
        switch (sortStatus) {
            case 0:
                return "fas fas fa-sort";
                break;

            case 1:
                return "fas fa-sort-down";
                break;
        
            default:
                return "fas fa-sort-up";
                break;
        }
    }

    render(){
        return(
            <li className={`${this.state.tHeadKey!="action"? "" : "action"}`}>
                <ul>
                    <li className="t-head">
                        <p>{this.state.title}</p>
                        {
                            this.state.sortSwitch &&
                                <span className={`sort ${this.sortStatus()}`} onClick={this.sortACtion.bind(this,this.state.tHeadKey)}></span>
                        }
                    </li>
                    {
                        this.state.data.map((item,i)=>{
                            if( this.state.tHeadKey!="action" ){
                                return(
                                    <li key={i}>
                                        {
                                            this.state.link==true ?(
                                                <Link to={`${this.state.path}/${item['id'] || item['_id']||""}`}>{item[this.state.tHeadKey]}</Link>
                                            ):(
                                                <p>{item[this.state.tHeadKey]}</p>
                                            )

                                        }
                                        
                                    </li>
                                );
                            }else{
                                return (
                                    <li key={i} className={`${this.state.tHeadKey}`}>
                                        <div className="tool">
                                            {
                                                this.state.tHead[this.state.tHeadKey].map((item,b)=>{
                                                    if( item['key']!="more" ){
                                                        return(
                                                            <span key={b} className={`tool-btn ${item["key"]} ${item["icon"] || ""}`} title={item['text']||""}>{ item['text']||"" }</span>
                                                        );
                                                    }else{
                                                        return(
                                                            <Link key={b} className={`tool-btn ${item["key"]} ${item["icon"] || ""}`} title={item['text']||""} to="">{ item['text']||"" }</Link>
                                                        );
                                                    }
                                                })
                                            }
                                        </div>
                                    </li>
                                );
                            }
                        })
                    }
                </ul>
            </li>
        );
    }
}