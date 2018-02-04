const express = require('express');
const router = express.Router();
const config = require('../config/database');


// router.post('/register',(req, res, next) => {
// 	let newUser = new User({
// 		name: req.body.name,
// 		email: req.body.email,
// 		username: req.body.username,
// 		password: req.body.password
// 	});

// 	User.addUser(newUser, (err, user) => {
// 		if (err)
// 		{
// 			res.json({success: false, msg: 'failed to register'});
// 		}
// 		else {
// 			res.json({success: true, msg: 'user egister'});
// 		}
// 	});
// });

// router.post('/authenticate',(req, res, next) => {
// 	const username = req.body.username;
// 	const password = req.body.password;

// 	User.getUserByUsername(username, (err, user) => {
// 		if (err) throw err;

// 		if(!user) {
// 			return res.json({success: false, msg: 'user not found'});
// 		}

// 		User.comparePassword(password, user.password, (err, isMatch) => {
// 			if (err) throw err;
// 			if (isMatch) {
// 				const token = jwt.sign(user.toJSON(), config.secret, {
// 					expiresIn: 604800
// 				});

// 				res.json({
// 					sucess: true,
// 					token: 'JWT '+token,
// 					user: {
// 						id: user._id,
// 						name: user.name,
// 						username: user.username,
// 						email: user.email
// 					}
// 				});
// 			}
// 			else {
// 				return res.json({sucess: false, msg: 'wrong pass'});
// 			}
// 		});
// 	});
// });

// router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
// 	res.json({user: req.user});
// });
router.get('/santas', (req, res, next) => {
	res.send('samtas');
});

router.post('/santas', (req, res, next) => {
	res.send('yep posting');
});

module.exports = router;