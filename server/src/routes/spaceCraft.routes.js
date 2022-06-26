const { Router } = require('express');
const { getSpaceCrafts, setSpaceCraft } = require('../controllers/spaceCraft.controller.js');
const router = Router()

router.get('/', getSpaceCrafts);
router.post('/', setSpaceCraft);

module.exports = router;