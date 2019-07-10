const express = require('express');

const router = express.Router();

const itemscontroller = require('../../controllers/itemscontroller');

// Pass request to controller to handle
router.get('/', itemscontroller.index);
router.post('/', itemscontroller.add);
router.put('/:id', itemscontroller.update);
router.delete('/:id', itemscontroller.destroy);

module.exports = router;