const express = require('express');
const { body, param } = require('express-validator');
const mathController = require('../controllers/math.controller');

const router = express.Router();

// Validation middleware
const validateAddition = [
  body('a').isNumeric().withMessage('First number must be numeric'),
  body('b').isNumeric().withMessage('Second number must be numeric'),
];

const validateFactorial = [
  param('number')
    .isInt({ min: 0 })
    .withMessage('Number must be a non-negative integer'),
];

const validateFibonacci = [
  param('count')
    .isInt({ min: 1 })
    .withMessage('Count must be a positive integer'),
];

// Routes
router.post('/addition', validateAddition, mathController.addition);
router.get('/factorial/:number', validateFactorial, mathController.factorial);
router.get('/fibonacci/:count', validateFibonacci, mathController.fibonacci);
router.get('/history', mathController.getHistory);

module.exports = router;
