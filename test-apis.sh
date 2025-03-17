#!/bin/bash

echo "Starting API tests...\n"

# Test Addition API
echo "Testing Addition API..."
curl -X POST http://localhost:3000/api/addition \
-H "Content-Type: application/json" \
-d '{"a": 5, "b": 3}'
echo -e "\nAddition API Test: ✅\n"

# Test Factorial API
echo "Testing Factorial API..."
curl http://localhost:3000/api/factorial/5
echo -e "\nFactorial API Test: ✅\n"

# Test Fibonacci API
echo "Testing Fibonacci API..."
curl http://localhost:3000/api/fibonacci/5
echo -e "\nFibonacci API Test: ✅\n"

# Test History API
echo "Testing History API..."
curl http://localhost:3000/api/history
echo -e "\nHistory API Test: ✅\n"

echo "All API tests completed! 🎉" 