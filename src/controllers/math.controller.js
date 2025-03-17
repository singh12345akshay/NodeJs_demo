const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class MathController {
  constructor() {
    // Bind all methods to the instance
    this.addition = this.addition.bind(this);
    this.factorial = this.factorial.bind(this);
    this.fibonacci = this.fibonacci.bind(this);
    this.getHistory = this.getHistory.bind(this);
    this.calculateFactorial = this.calculateFactorial.bind(this);
    this.generateFibonacci = this.generateFibonacci.bind(this);
  }

  // Addition operation
  async addition(req, res, next) {
    try {
      const { a, b } = req.body;
      const result = Number(a) + Number(b);

      await prisma.calculation.create({
        data: {
          operation: 'addition',
          input: JSON.stringify({ a, b }),
          result: result.toString(),
        },
      });

      res.json({ result });
    } catch (error) {
      next(error);
    }
  }

  // Factorial operation
  async factorial(req, res, next) {
    try {
      const number = parseInt(req.params.number);
      if (number < 0) {
        return res.status(400).json({ error: 'Number must be non-negative' });
      }

      const result = this.calculateFactorial(number);

      await prisma.calculation.create({
        data: {
          operation: 'factorial',
          input: number.toString(),
          result: result.toString(),
        },
      });

      res.json({ result });
    } catch (error) {
      next(error);
    }
  }

  // Fibonacci sequence
  async fibonacci(req, res, next) {
    try {
      const count = parseInt(req.params.count);
      if (count < 1) {
        return res.status(400).json({ error: 'Count must be positive' });
      }

      const sequence = this.generateFibonacci(count);

      await prisma.calculation.create({
        data: {
          operation: 'fibonacci',
          input: count.toString(),
          result: JSON.stringify(sequence),
        },
      });

      res.json({ sequence });
    } catch (error) {
      next(error);
    }
  }

  // Get calculation history
  async getHistory(req, res, next) {
    try {
      const calculations = await prisma.calculation.findMany({
        orderBy: { createdAt: 'desc' },
      });
      res.json(calculations);
    } catch (error) {
      next(error);
    }
  }

  // Helper methods
  calculateFactorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * this.calculateFactorial(n - 1);
  }

  generateFibonacci(count) {
    const sequence = [0, 1];
    for (let i = 2; i < count; i++) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence.slice(0, count);
  }
}

// Create and export a single instance
const mathController = new MathController();
module.exports = mathController;
