import React                               from 'react';
import ReactDOM                            from 'react-dom';
import { Provider,connect }                from 'react-redux';
import { BrowserRouter, HashRouter }       from 'react-router-dom';

//Components
import Roters                              from './components/common/router.js';

//redux
import store                               from './store';

//CSS
import './public/stylesheets/style.scss';

import registerServiceWorker               from './registerServiceWorker';

export default class Index extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <Provider store={store}>
          <Roters />
        </Provider>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<Index/>, document.getElementById('root'));
registerServiceWorker();
