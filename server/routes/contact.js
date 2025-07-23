const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    await Message.create({ name, email, message });
    res.status(200).send('Message saved successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Failed to save message');
  }
});

router.get('/', async (req, res) => {
    try {
      const messages = await Message.findAll();
      res.json(messages);
    } catch (err) {
      res.status(500).send('Failed to fetch messages');
    }
  });
  
module.exports = router;
