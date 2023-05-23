const { boolean } = require('webidl-conversions');
const mongoose = require('../database');

const bcryptjs = require('bcryptjs');

const userSchema = new mongoose.Schema(
    {
    name: {
        type: mongoose.Schema.Types.String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
        index: true
    },
    password: {
        type: String,
        require: true
    },
    archived:{
        type:Boolean,
        default: false
    },

},
{
    timestamps: true,
    versionKey: false
}
);
userSchema.pre('save', async function(next){
    const hash = await bcryptjs.hash(this.password, 10)
    console.log(this);
    console.log(hash);
    this.password = hash;
})

const user = mongoose.model('user', userSchema);
module.exports = user;