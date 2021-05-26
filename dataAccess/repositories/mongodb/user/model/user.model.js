// Require Model
const { Schema, model } = require('mongoose');

// Declare Role Valid
const ROLES = [ 'ADMIN_ROLE', 'USER_ROLE'];

// Declare Schema
const UserSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: [true, 'The name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'The email is required'],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, 'The password is required'],
        trim: true
    },
    role: {
        type: String,
        enum: ROLES,
        default: 'ADMIN_ROLE',
    },
    registrationDate: {
        type: Date,
        default: Date.now()
    },
});


module.exports = model('User', UserSchema);