const Todo = require('../models/Todo')
const User = require('../models/User')

//fetches admin panel page if user has admin status
module.exports = {
    getAdminPanel: async (req,res)=>{
        console.log(req.user.isAdmin)
        try{
            if (req.user.isAdmin == true) {
                const todoItems = await Todo.find().sort({'userId':1})
                const userList = await User.find().sort({'userName':1})
                const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
                res.render('adminpanel.ejs', {todos: todoItems, left: itemsLeft, user: req.user, users: userList})
            } else if (req.user.isAdmin == false) {
                res.render('index.ejs')
            }
        }catch(err){
            console.log(err)
        }
    },

}