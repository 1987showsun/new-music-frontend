
import { setup } from './setup';
import { getAxios } from './getAxios';

export function info( match ){
  return function(dispatch){

    let page        = match['params']['page'];
    let apiUrl      = `http://localhost:8080/api/info/${page}`;
    let params      = {
      id : match['params']['id'],
    }

    getAxios( apiUrl,params ).then(res=>{
      switch (page) {
        case "incs":
          dispatch({
            type        : "INFO_INC_SET",
            data        : res['data']['info'][0],
            singer      : res['data']['singer'],
            album       : res['data']['album']
          })
          break;
      
        default:
          dispatch({
            type        : "INFO_INC_SET",
            data        : res['data']['info'][0],
            album       : res['data']['album']
          })
          break;
      }
    })
  }
}