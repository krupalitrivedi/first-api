const express = require('express');
const router = express.Router();
const {getUser, setUser, updateUser, deleteUser} = require('../controllers/userController')

router.route('/').get(getUser).post(setUser)
router.route('/:id').put(updateUser)
router.route('/:id').delete(deleteUser)

module.exports = router;