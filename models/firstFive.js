const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const FirstFiveSchema = new Schema({

    title: { 
        type: String, 
        required: true
    },
    prompt: { 
        type: String, 
        required: true, 
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
}, {
    timestamps: true
})

module.exports = mongoose.model('FirstFive', FirstFiveSchema)