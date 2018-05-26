import uri from './uri';

export default class {
  static async get(url) {
    try {
      const response = await fetch(uri + url);
      const data = await response.json();

      return data;
    } catch (error) {
      /*eslint-disable no-console*/
      console.error(error);
    }
  }
}
