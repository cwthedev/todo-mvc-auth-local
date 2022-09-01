const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Todo', TodoSchema)
