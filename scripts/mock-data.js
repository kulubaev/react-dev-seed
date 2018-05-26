/*eslint-disable no-console*/
import faker from 'json-schema-faker';
import { users } from '../src/api/mock/schema';
import filesystem from 'fs';

let data = JSON.stringify(faker(users));

filesystem.writeFile('./src/api/mock/mock-data.json', data, error => {
  if (error) {
    console.error('failed to generate mock-data generated for users');
    console.error(error);
  } else {
    console.log('users mock-data generated');
  }
});

/*eslint-enable no-console*/
