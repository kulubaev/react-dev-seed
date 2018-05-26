import uri from './uri';

const success = resp => {
  return resp.json();
}
const error = error => {

  /*eslint-disable no-console*/
  console.error(error);
  /*eslint-enable no-console*/
}

export default class {

  static get(url){
    return fetch(uri + url)
      .then(success,error);
  }
}



