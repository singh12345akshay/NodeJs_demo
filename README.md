# Math API Backend

A Node.js backend application that provides mathematical operations through RESTful APIs, using Prisma ORM with SQLite database.

## Features

- Three mathematical operations:
  - Addition of two numbers
  - Factorial calculation
  - Fibonacci sequence generation
- Request/Response logging
- Input validation
- Error handling
- Calculation history tracking
- SQLite database integration with Prisma ORM

## Design Pattern

This application implements the MVC (Model-View-Controller) pattern:

- **Models**: Defined in Prisma schema (`prisma/schema.prisma`)
- **Controllers**: Business logic in `src/controllers/math.controller.js`
- **Routes**: API endpoints in `src/routes/math.routes.js`

The MVC pattern provides:

- Separation of concerns
- Better code organization
- Easier maintenance and testing
- Clear responsibility boundaries

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd math-api-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Initialize the database:
   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

## Running the Application

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm start
```

## API Documentation

### 1. Addition API

- **Endpoint**: `POST /api/addition`
- **Description**: Adds two numbers together
- **Request Body**:
  ```json
  {
    "a": number,
    "b": number
  }
  ```
- **Response**:
  ```json
  {
    "result": number
  }
  ```
- **Example**:
  ```bash
  curl -X POST http://localhost:3000/api/addition \
  -H "Content-Type: application/json" \
  -d '{"a": 5, "b": 3}'
  ```

### 2. Factorial API

- **Endpoint**: `GET /api/factorial/:number`
- **Description**: Calculates factorial of a given number
- **Parameters**:
  - `number`: Non-negative integer
- **Response**:
  ```json
  {
    "result": number
  }
  ```
- **Example**:
  ```bash
  curl http://localhost:3000/api/factorial/5
  ```

### 3. Fibonacci API

- **Endpoint**: `GET /api/fibonacci/:count`
- **Description**: Generates Fibonacci sequence up to specified count
- **Parameters**:
  - `count`: Positive integer
- **Response**:
  ```json
  {
    "sequence": number[]
  }
  ```
- **Example**:
  ```bash
  curl http://localhost:3000/api/fibonacci/5
  ```

### 4. History API

- **Endpoint**: `GET /api/history`
- **Description**: Retrieves calculation history
- **Response**:
  ```json
  [
    {
      "id": number,
      "operation": string,
      "input": string,
      "result": string,
      "createdAt": string,
      "updatedAt": string
    }
  ]
  ```
- **Example**:
  ```bash
  curl http://localhost:3000/api/history
  ```

## Testing

### Running Tests

```bash
npm test
```

### Manual Testing

You can use the provided test script:

```bash
./test-apis.sh
```

Or run the Node.js test script:

```bash
node test-apis.js
```

## Error Handling

The application includes comprehensive error handling:

- Input validation errors (400)
- Server errors (500)
- All errors are logged and return appropriate status codes and messages

## Logging

Logs are stored in:

- `error.log`: Error-level logs
- `combined.log`: All logs

## Project Structure

```
math-api-backend/
├── prisma/
│   └── schema.prisma
├── src/
│   ├── controllers/
│   │   └── math.controller.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── routes/
│   │   └── math.routes.js
│   ├── utils/
│   │   └── logger.js
│   └── index.js
├── tests/
│   └── math.test.js
├── test-apis.js
├── test-apis.sh
├── package.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
