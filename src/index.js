const express = require('express');
const cors = require('cors');
const { requestLogger } = require('./utils/logger');
const { errorHandler } = require('./middleware/errorHandler');
const mathRoutes = require('./routes/math.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(requestLogger);

// Routes
app.use('/api', mathRoutes);

// Error handling
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
