const request = require('supertest');
const app = require('../index');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

describe('Math API Tests', () => {
  beforeAll(async () => {
    // Clear the database before tests
    await prisma.calculation.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe('POST /api/addition', () => {
    it('should add two numbers correctly', async () => {
      const response = await request(app)
        .post('/api/addition')
        .send({ a: 5, b: 3 });

      expect(response.status).toBe(200);
      expect(response.body.result).toBe(8);
    });

    it('should handle invalid input', async () => {
      const response = await request(app)
        .post('/api/addition')
        .send({ a: 'invalid', b: 3 });

      expect(response.status).toBe(400);
    });
  });

  describe('GET /api/factorial/:number', () => {
    it('should calculate factorial correctly', async () => {
      const response = await request(app).get('/api/factorial/5');

      expect(response.status).toBe(200);
      expect(response.body.result).toBe(120);
    });

    it('should handle negative numbers', async () => {
      const response = await request(app).get('/api/factorial/-1');

      expect(response.status).toBe(400);
    });
  });

  describe('GET /api/fibonacci/:count', () => {
    it('should generate Fibonacci sequence correctly', async () => {
      const response = await request(app).get('/api/fibonacci/5');

      expect(response.status).toBe(200);
      expect(response.body.sequence).toEqual([0, 1, 1, 2, 3]);
    });

    it('should handle invalid count', async () => {
      const response = await request(app).get('/api/fibonacci/0');

      expect(response.status).toBe(400);
    });
  });

  describe('GET /api/history', () => {
    it('should return calculation history', async () => {
      const response = await request(app).get('/api/history');

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });
});
