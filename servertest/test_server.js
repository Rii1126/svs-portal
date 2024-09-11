const axios = require('axios');

async function register() {
  const url = 'http://dev.portal.solanavibestation.com:5000/register';

  // Data to send in the request
  const data = {
    username: 'your_username',
    password: 'your_password',
    email: 'your_email@example.com'
  };

  // Replace 'your_jwt_token' with the actual JWT token
  const token = 'your_jwt_token';

  try {
    const response = await axios.post(url, data, {
      headers: {
        Authorization: `jwt ${token}`
      }
    });
    
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

register();

