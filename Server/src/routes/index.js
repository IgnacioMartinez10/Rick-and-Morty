const { login } = require('./../controllers/login');
const { getCharById } = require('./../controllers/getCharById');
const { postFavorites, deleteFavorites } = require('./../controllers/handleFavorites');

const router = require('express').Router();

router.get('/character/:id', getCharById);
router.get('/login', login);
router.post('/fav', postFavorites);
router.delete('/fav/:id', deleteFavorites);

module.exports = { router };