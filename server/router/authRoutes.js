const {Router} = require('express');
const router = Router();
const {auth_login_post,auth_register_post} = require('../controllers/authController');

router.post('/login', auth_login_post);
router.post('/register',auth_register_post);

module.exports = router;
