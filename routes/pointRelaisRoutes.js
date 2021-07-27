const { Router } = require('express');
const pointRelaisController = require('../controllers/pointRelaisController');
const router = Router();

router.get('/', pointRelaisController.getPointsRelais);
router.post('/', pointRelaisController.addPointRelais);
router.delete('/:id', pointRelaisController.deletePointRelais);
router.get('/:id', pointRelaisController.getPointRelais);

module.exports = router;

