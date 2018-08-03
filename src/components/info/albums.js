import React          from 'react';
import { Link }       from 'react-router-dom';
import { connect }    from 'react-redux';

class Albums extends React.Component{
    render(){
        return(
            <main id="album-info">
                <div className="main-block">
                    <div className="main-block-left">
                        <figure>
                            <img src="https://is4-ssl.mzstatic.com/image/thumb/Music128/v4/6c/25/6d/6c256dca-cf3c-7b02-b748-a3186ae850e2/00602567646648.rgb.jpg/313x0w.jpg" alt="" title="" />
                        </figure>
                    </div>
                    <div className="main-block-right">
                        <div className="main-block-in">
                            <h1>Willie Got Me Stoned (Live) - Single</h1>
                            <h2><Link to="">Jack Johnson</Link></h2>
                            <p>2018-01-01</p>
                        </div>
                        <div className="main-block-in">
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

const mapStateToProps = state => {
    return{

    }
}

export default connect(mapStateToProps)(Albums);