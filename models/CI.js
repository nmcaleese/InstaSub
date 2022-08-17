const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CISchema = new Schema(
  {
    class: {
      type: String,
      required: true,
    },
    period: {
      type: String,
      required: true,
    },
    classroomInstructions: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CI", CISchema);
