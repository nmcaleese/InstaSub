const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const CISchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
    class: { 
        type: String, 
        required: true
    },
    period: { 
        type: String, 
        required: true, 
    },
    ClassroomInstructions: { 
        type: String, 
        required: true 
    },

}, {
    timestamps: true
})

module.exports = CISchema