const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const contactRoutes = require('./routes/contact');
const Message = require('./models/Message');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/contact', contactRoutes);

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});
// Start the server
const PORT = 5000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('SQLite connected!');
    await sequelize.sync(); // creates the tables if they don't exist

    app.listen(PORT, () => {
      console.log(` Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(' Failed to connect to database:', error);
  }
})();
