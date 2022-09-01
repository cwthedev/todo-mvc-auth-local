const ClosingList = require('../models/ClosingList')

module.exports = {
    getTodos: async (req,res)=>{
        console.log(req.user)
        try{
            const todoItems = await ClosingList.find()
            // const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
            res.render('todos.ejs', {ClosingList, user: req.user}
            // , {todos: todoItems, left: itemsLeft, user: req.user}
            )
        }catch(err){
            console.log(err)
        }
    },
    createTodo: async (req, res)=>{
        const user = req.user
        const list = new ClosingList({
            cleanBathroom: req.body.cleanBathroom,
            getCarts: req.body.getCarts,
            sweep: req.body.sweep,
            closeRegister: req.body.closeRegister,
            userId: user._id
        })
        try{
            await list.save()
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    // markComplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: true
    //         })
    //         console.log('Marked Complete')
    //         res.json('Marked Complete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // markIncomplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: false
    //         })
    //         console.log('Marked Incomplete')
    //         res.json('Marked Incomplete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // deleteTodo: async (req, res)=>{
    //     console.log(req.body.todoIdFromJSFile)
    //     try{
    //         await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
    //         console.log('Deleted Todo')
    //         res.json('Deleted It')
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
}    