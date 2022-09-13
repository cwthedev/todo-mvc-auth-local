const User = require('../models/User')
const ClosingList = require('../models/ClosingList')


exports.getApply = (req,res)=>{
    try{
        res.render('apply.ejs', {user: req.user})
    }catch(err){
        console.log(err)
    }
},

exports.updateManager = (req, res)=>{
    const user = req.user
    let admin = req.user.isAdmin
    const filter = {'_id': user._id}
    const update = {'isAdmin': true}
    // console.log(filter)
    try{
        if (admin == false) {
            user.isAdmin = true
            user.save()
        }
        res.redirect('/adminpanel')
    }catch(err){
        console.log(err)
    }
}