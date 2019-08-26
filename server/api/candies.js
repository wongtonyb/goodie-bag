const router = require('express').Router();
const Candy = require('../db/models/Candy');

// GET /api/candies
router.get('/', async (req, res, next) => {
  try {
    let candies = await Candy.findAll();
    if (candies) {
      res.json(candies);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
