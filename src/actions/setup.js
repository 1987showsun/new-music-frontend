export function setup(){
  let token  = sessionStorage.getItem('token') || "";
  let apiSet = `http://localhost:3001`;
  let api = {
    "nav" : `${apiSet}/menu`
  }

  return {
    token : token,
    api   : api
  }
}
