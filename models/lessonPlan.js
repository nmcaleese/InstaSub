const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const LessonPlanSchema = new Schema({

    title: { 
        type: String, 
        required: true
    },
    subject: { 
        type: String, 
        required: true, 
    },
    content: { 
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

module.exports = mongoose.model('LessonPlan', LessonPlanSchema)