const mongoose = require('mongoose')

const ClosingSchema = new mongoose.Schema({
  cleanBathroom: {
    type: String, 
    // default: false,

  },
  getCarts: {
    type: String, 
    // default: false,

  },
  sweep: {
    type: String, 
    // default: false,

  },
  closeRegister: {
    type: String, 
    // default: false,

  },
  userId: {
    type: String,
    required: true
  }


  // todo: {
  //   type: String,
  //   required: true,
  // },
  // completed: {
  //   type: Boolean,
  //   required: true,
  // },
  // userId: {
  //   type: String,
  //   required: true
  // }
})

module.exports = mongoose.model('ClosingList', ClosingSchema)