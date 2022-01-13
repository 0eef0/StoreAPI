const express = require('express');
const router = express.Router();

const {getAllShoes, getShoe, deleteShoe, updateShoe, createShoe} = require('../controllers/shoes');

router.route('/').get(getAllShoes).post(createShoe);
router.route('/:id').get(getShoe).delete(deleteShoe).patch(updateShoe);

module.exports = router;