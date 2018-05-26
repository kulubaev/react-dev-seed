//@flow
import httpApi from '../api/http';
/*eslint-disable no-console*/
console.log('starting app');

httpApi.get('/users').then(response => {
  let result = '';
  response.forEach(user => {
    result += `<tr>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
      </tr>`;
  });

  global.document.getElementById('users').innerHTML = result;
});

/*eslint-enable no-console*/
