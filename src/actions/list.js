
import { setup } from './setup';
import { getAxios } from './getAxios';

export function list( match,limit ){
  return function(dispatch){

    let initLimit   = limit || 10;
    let page        = match['params']['page']
    let apiUrl      = `http://localhost:8080/api/list/${page}`;
    let params      = {
      currentPage : match['params']['current'] || 1,
      limit       : match['params']['limit']   || initLimit
    }

    getAxios( apiUrl,params ).then(res=>{
      dispatch({
        type        : "LIST_INC_SET",
        currentPage : res['data']['currentPage'],
        total       : res['data']['total'],
        limit       : res['data']['limit'],
        list        : res['data']['list']
      })
    })
  }
}