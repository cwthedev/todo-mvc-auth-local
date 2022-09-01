const mongoose = require('mongoose')

const ClosingSchema = new mongoose.Schema({
  cleanBathroom: {
    type: String, 
  },
  getCarts: {
    type: String, 
  },
  sweep: {
    type: String, 
  },
  closeRegister: {
    type: String, 
  },
  userId: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('ClosingList', ClosingSchema)