const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ExitTicketSchema = new Schema({

    title: { 
        type: String, 
        required: true
    },
    question: { 
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

module.exports = mongoose.model('ExitTicket', ExitTicketSchema)