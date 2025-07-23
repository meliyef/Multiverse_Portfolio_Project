const request = require('supertest');
const express = require('express');
const bodyParser = require('express').json;
const contactRoute = require('../routes/contact');
const { Sequelize, DataTypes } = require('sequelize');

// Setup test DB
const sequelize = new Sequelize('sqlite::memory:');

const Message = sequelize.define('Message', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  message: DataTypes.STRING,
});

const app = express();
app.use(bodyParser());
app.use('/contact', contactRoute);

// Mock model
jest.mock('../models/Message', () => ({
    create: jest.fn(), // Mock only what you need
  }));
  

beforeAll(async () => {
  await sequelize.sync();
});

describe('POST /contact', () => {
  it('should save a new message', async () => {
    const res = await request(app)
      .post('/contact')
      .send({
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test message',
      });

    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Message saved successfully');
  });
  
});
