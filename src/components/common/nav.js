import React,{Component}           from 'react';
import { NavLink,Link }            from 'react-router-dom';
import { connect }                 from 'react-redux';


//Actions

const data = [
  {
    "name" : "唱片公司",
    "path" : "/collections/incs",
  },
  {
    "name" : "演員/歌手",
    "path" : "/collections/teams",
  },
  {
    "name" : "管理專輯",
    "path" : "/collections/albums",
  }
]


class Nav extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      data : data
    }
  }

  componentDidMount() {
  }

  render(){
    return(
      <nav>
        <div className="nav-block">
          <Link to="/" className="logo">GINITURN</Link>
        </div>
        <div className="nav-block">
          <ul className="nav main">
            {
              this.state.data.map((item,i)=>{
                return (
                  <li key={i}><NavLink to={item['path']}>{item['name']}</NavLink></li>
                );
              })
            }
          </ul>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return{

  }
}

export default connect(mapStateToProps)(Nav);
