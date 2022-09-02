const ClosingList = require('../models/ClosingList')

module.exports = {
    getTodos: async (req,res)=>{
        console.log(req.user)
        try{
            const todoItems = await ClosingList.find()
            res.render('todos.ejs', {ClosingList, user: req.user}
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
}    