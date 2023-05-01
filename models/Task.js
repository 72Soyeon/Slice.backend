const { Schema, model } = require("mongoose");

const TaskSchema = Schema({
    sentence: {
        type: [String],
        required: true,
      },
      subtask: {
        type: Object,
        required: false,
      },
      transfer: {
        type: Boolean,
        required: true,
      },
      complete: {
        type: Boolean,
        required: true,
      },
      timeframe: {
        type: [Number],
        required: true,
      },
});

module.exports = model("TaskSchema", TaskSchema);
