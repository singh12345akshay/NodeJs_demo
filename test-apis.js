const axios = require('axios');

const BASE_URL = 'http://localhost:3000/api';

async function testAPIs() {
  try {
    console.log('Starting API tests...\n');

    // Test Addition API
    console.log('Testing Addition API...');
    const additionResponse = await axios.post(`${BASE_URL}/addition`, {
      a: 5,
      b: 3,
    });
    console.log('Addition Result:', additionResponse.data);
    console.log('Addition API Test: ✅\n');

    // Test Factorial API
    console.log('Testing Factorial API...');
    const factorialResponse = await axios.get(`${BASE_URL}/factorial/5`);
    console.log('Factorial Result:', factorialResponse.data);
    console.log('Factorial API Test: ✅\n');

    // Test Fibonacci API
    console.log('Testing Fibonacci API...');
    const fibonacciResponse = await axios.get(`${BASE_URL}/fibonacci/5`);
    console.log('Fibonacci Result:', fibonacciResponse.data);
    console.log('Fibonacci API Test: ✅\n');

    // Test History API
    console.log('Testing History API...');
    const historyResponse = await axios.get(`${BASE_URL}/history`);
    console.log('History Result:', historyResponse.data);
    console.log('History API Test: ✅\n');

    console.log('All API tests completed successfully! 🎉');
  } catch (error) {
    console.error('Error during API testing:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
    }
  }
}

// Run the tests
testAPIs();
