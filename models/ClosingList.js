const mongoose = require('mongoose')

const ClosingSchema = new mongoose.Schema(
  {
    cleanBathroom: {
      type: Boolean, 
    },
    getCarts: {
      type: Boolean,
    },
    sweep: {
      type: Boolean,
    },
    closeRegister: {
      type: Boolean,
    },
    notes: {
      type: String,
    },
    signature: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('ClosingList', ClosingSchema)