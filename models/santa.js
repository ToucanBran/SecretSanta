const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const SantaSchema = mongoose.Schema({
	name: {
		type: String
	},
	email: {
		type: String,
		required: true
	},
	phoneNumber: {
		type: String,
		required: true
	},
	santaHash: {
		type: String,
		required: true
	},
	assignedPersonHash: {
		type: String,
		required: true
	}
});

const Santa = module.exports = mongoose.model('Santa', SantaSchema);

module.exports.getAssignedPerson = function(personHash, callback){
	Santa.findOne({assignedPersonHash: personHash});
}
