const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true } // createdAt & updatedAt
);

module.exports = mongoose.model("todo", TodoSchema);
