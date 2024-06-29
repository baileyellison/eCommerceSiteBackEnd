const router = require('express').Router();
const apiRoutes = require('./api');

// Middleware to handle requests to /api
router.use('/api', apiRoutes);

// Middleware to handle incorrect routes
router.use((req, res) => {
  res.status(404).send("<h1>Wrong Route!</h1>");
});

module.exports = router;
