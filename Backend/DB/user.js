const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    display_name: {
        type: String,
        require: true,
        min: [1, 'Must be at least 1, got {VALUE}'],
        max: [32, 'Must be at most 32, got {VALUE}']
    },
    username: {
        type: String,
        require: true,
        unique: true,
        min: [2, 'Must be at least 2, got {VALUE}'],
        max: [32, 'Must be at most 32, got {VALUE}'],
        // must contains letters digits _ and .
    },
    email: {
        type: String,
        require: true,
        unique: true,
        min: [3, 'Must be at least 3, got {VALUE}'],
        max: [320, 'Must be at most 320, got {VALUE}'],
        // email validation
    },
    password: {
        type: String,
        require: true
    },
    phone_number: {
        type: String,
        // phone validation
    },
    pronouns: {
        type: String,
        min: [0, 'Must be at least 0, got {VALUE}'],
        max: [40, 'Must be at most 40, got {VALUE}'],
    },
    about_me: {
        type: String,
        min: [0, 'Must be at least 0, got {VALUE}'],
        max: [190, 'Must be at most 190, got {VALUE}'],
    },
    avatar_url: {
        type: String
    },
    banner_url: {
        type: String
    },
    avatar_decoration: {
        type: String,
        enum: ['pink', 'dark_blue', 'purple', 'dark_green', 'red', 'orange', 'blue', 'green', 'yellow']
    },
    profile_effect: {
        type: String,
        enum: ['pink', 'dark_blue', 'purple', 'dark_green', 'red', 'orange', 'blue', 'green', 'yellow']
    },
    nameplate: {
        type: String,
        enum: ['pink', 'dark_blue', 'purple', 'dark_green', 'red', 'orange', 'blue', 'green', 'yellow']
    }
})

const user_model = mongoose.model('users', User);
module.exports = {
    user_model: user_model,
}