const router = require('express').Router();
const controllers = require('./controllers');

router.post('/', controllers.postModel);

router.get('/', controllers.getModels);

router.get('/:id', controllers.getModel);

router.put('/:id', controllers.putModel);

router.delete('/:id', controllers.deleteModel);

module.exports = router;