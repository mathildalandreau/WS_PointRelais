const { Router } = require('express');
const pointRelaisController = require('../controllers/pointRelaisController');
const router = Router();

router.get('/', pointRelaisController.getPointsRelais);
router.post('/', pointRelaisController.addPointRelais);

module.exports = router;

