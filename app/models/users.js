const mongoose = require('mongoose')

const UserScheme = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email:{
            type: String,
            unique: true,
            required: true
        },
        contact:{
            type: String,
            required: true
        },
    },
    {
        versionKey: false, 
        timestamps: true
    }
)

module.exports = mongoose.model('users',UserScheme)