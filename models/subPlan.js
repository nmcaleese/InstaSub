const mongoose = require('mongoose')
const CI = require('./CI')
const firstFive = require('./firstFive')
const lessonPlan = require('./lessonPlan')
const exitTicket = require('./exitTicket')


const Schema = mongoose.Schema;

const SubPlanSchema = new Schema({
    CI: {
        type: Schema.Types.ObjectId,
        ref: 'CI',
        required: true
    },
    firstFive: {
        type: Schema.Types.ObjectId,
        ref: 'firstFive',
        required: true
    },
    lessonPlan: {
        type: Schema.Types.ObjectId,
        ref: 'lessonPlan',
        required: true
    },
    exitTicket: {
        type: Schema.Types.ObjectId,
        ref: 'exitTicket',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
}, {
    timestamps: true
})

module.exports = mongoose.model('SubPlan', SubPlanSchema)