const { model, Schema } = require('mongoose');
const shortId = require('shortid');

const userSchema = new Schema({
    userId: {
        type: String,
        default: shortId.generate,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    introduce: {
        type: Object,
        required: false,
    },
    isCertificated: {
        type: Boolean,
        default: false,
    },
    },
    {
        timestamps: true,
    }
    
);

const User = model('User', userSchema);

module.exports = User;
