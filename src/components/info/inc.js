import React       from 'react';
import { connect } from 'react-redux';
import { Link }    from 'react-router-dom';

//Components

//Actions
import { info }    from '../../actions/info';

class Inc_info extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            match   : props.match,
            info    : props.info,
            singer  : props.singer,
            album   : props.album
        }
    }

    componentDidMount() {
        let match = this.state.match;
        this.props.dispatch( info(match) );
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            info   : nextProps.info,
            singer : nextProps.singer,
            album  : nextProps.album
        })
    }

    render(){
        return(
            <main>
                <div className="main-block title">
                    <h4>公司資料</h4>
                </div>

                <div className="main-block">
                    <div className="main-block-left">
                        <div className="main-block-in">
                            <img src={this.state.info['cover']} alt={this.state.info['name']} title={this.state.info['name']} className="cover"/>
                        </div>
                    </div>
                    <div className="main-block-right">
                        <div className="main-block-in">
                            <ul className="list-info">
                                <li>
                                    <ul>
                                        <li className="ladel">名稱<span>：</span></li>
                                        <li>{this.state.info['name']}</li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li className="ladel">電話<span>：</span></li>
                                        <li>{this.state.info['tel']}</li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li className="ladel">統一編號<span>：</span></li>
                                        <li>{this.state.info['nu']==""? "--":this.state.info['nu']}</li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li className="ladel">地址<span>：</span></li>
                                        <li>{this.state.info['addres']}</li>
                                    </ul>
                                </li>
                                <li>
                                    <ul>
                                        <li className="ladel">連結<span>：</span></li>
                                        <li>
                                            <a href={this.state.info['url']} target="_bank">官方網站</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="main-block">
                    <div className="main-block-title">
                        <h5>旗下歌手</h5>
                        <span className="btn add">新增歌手</span>
                    </div>
                    <div className="list-wrap">
                        <ul className="list-block-ul" data-type="singer">
                            {
                                this.state.singer.length > 0? (
                                    this.state.singer.map((item,i)=>{
                                        return(
                                            <li key={i}>
                                                <figure>
                                                    <Link to={`/info/teams/${item['_id']}`}>
                                                        <img src={item['cover']} alt="" title="" />
                                                    </Link>
                                                    <figcaption>
                                                        <Link to="">
                                                            <h3>{item['name']}</h3>
                                                        </Link>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                        );
                                    })
                                ):(
                                    <li>暫無資料</li>
                                )
                            }
                        </ul>
                    </div>
                </div>

                <div className="main-block">
                    <div className="main-block-title">
                        <h5>專輯</h5>
                        <span className="btn add">新增專輯</span>
                    </div>
                    <div className="list-wrap">
                        <ul className="list-block-ul">
                            {
                                this.state.album.length > 0? (
                                    this.state.album.map((item,i)=>{
                                        return(
                                            <li key={i}>
                                                <figure>
                                                    <Link to={`/info/album/${item['_id']}`}>
                                                        <img src={item['cover']} alt="" title="" />
                                                    </Link>
                                                    <figcaption>
                                                        <Link to="">
                                                            <h3>{item['name']}</h3>
                                                            <p>{item['publish_date']}</p>
                                                        </Link>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                        );
                                    })
                                ):(
                                    <li>暫無資料</li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        info   : state.info.data,
        singer : state.info.singer,
        album  : state.info.album
    }
}

export default connect(mapStateToProps)(Inc_info);