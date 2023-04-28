const mongoose = require('../database');

const bcryptjs = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        require: true,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});
userSchema.pre('save', async function(next){
    const hash = await bcryptjs.hash(this.password, 10)
    console.log(this);
    console.log(hash);
    this.password = hash;
})

const user = mongoose.model('user', userSchema);
module.exports = user;