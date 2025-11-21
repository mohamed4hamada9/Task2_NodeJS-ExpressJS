const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { ensureAuthenticated } = require('../middlewares/auth');

router.get('/', ensureAuthenticated, productController.index);
router.get('/new', ensureAuthenticated, productController.newForm);
router.post('/', ensureAuthenticated, productController.create);
router.get('/:id', ensureAuthenticated, productController.show);
router.get('/:id/edit', ensureAuthenticated, productController.editForm);
router.put('/:id', ensureAuthenticated, productController.update);
router.delete('/:id', ensureAuthenticated, productController.delete);

module.exports = router;
