const { Router } = require('express')
const router = Router()

const  spaceCraftRoutes = require('./spaceCraft.routes.js');
router.use('/spaceCraft', spaceCraftRoutes)

module.exports = router;