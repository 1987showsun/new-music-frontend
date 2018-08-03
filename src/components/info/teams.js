import React             from 'react';
import { connect }       from 'react-redux';

//Components
import List              from '../list';
import Share             from '../module/share';

//Actions
import { info }          from '../../actions/info';

//Jsons
import  columns    from '../../public/json/list_theader.json';

class Team extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            match        : props.match,
            info         : props.info,
            album        : props.album,
            albumColumns : columns['albums']
        }
    }

    componentDidMount() {
        const match = this.state.match;
        this.props.dispatch( info(match) );
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            match  : nextProps.match,
            info   : nextProps.info,
            album  : nextProps.album
        })
    }

    render(){
        return(
            <main>
                <div className="main-block title main-cover">
                    <figure className="cover">
                        <img src={this.state.info['cover']} alt="" title="" />
                        <figcaption>
                            <h2>{this.state.info['name']}</h2>
                        </figcaption>
                    </figure>
                </div>

                <div className="main-block">
                    <div className="main-block-title">
                        <h5>基本資料</h5>
                        <span className="btn edit">修改</span>
                    </div>
                    <ul className="team-info">
                        <li>
                            <ul>
                                <li className="label">生日<span>：</span></li>
                                <li>{this.state.info['birth']}</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li className="label">所屬公司<span>：</span></li>
                                <li>{this.state.info['inc']}</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li className="label">國籍<span>：</span></li>
                                <li>{this.state.info['nationality']}</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li className="label">人氣<span>：</span></li>
                                <li>{this.state.info['conut']}</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li className="label">標籤<span>：</span></li>
                                <li>{this.state.info['tag']==""? "--" : this.state.info['type']}</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li className="label">屬性<span>：</span></li>
                                <li>{this.state.info['type']==""? "--" : this.state.info['type']}</li>
                            </ul>
                        </li>
                        <li>
                            <Share data={this.state.info['website']}/>
                        </li>
                    </ul>
                </div>

                <div className="main-block">
                    <div className="main-block-title">
                        <h5>專輯</h5>
                        <span className="btn edit">修改</span>
                    </div>
                    <List
                        match          = {this.state.match}
                        columns        = {this.state.albumColumns}
                        data           = {this.state.album}
                        typeStyle      = "block"
                    />
                </div>
            </main>
        );
    }
}

const mapStateToProps = state => {
    return {
        info  : state.info.data,
        album : state.info.album
    }
} 

export default connect(mapStateToProps)(Team);