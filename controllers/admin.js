
const User = require('../models/User')
const ClosingList = require('../models/ClosingList')


//fetches admin panel page if user has admin status
module.exports = {
    getAdminPanel: async (req,res)=>{
        console.log(req.user.userName)
        try{
            let twoDaysAgo = new Date();
            twoDaysAgo.setUTCDate(twoDaysAgo.getDate()-2);
            twoDaysAgo.setHours(0)
            twoDaysAgo.setMinutes(0)
            twoDaysAgo.setSeconds(0)
            twoDaysAgo.setMilliseconds(0)
            console.log(twoDaysAgo)
            if (req.user.isAdmin == true) {
                const closingLists = await ClosingList.find({createdAt: {$gt: twoDaysAgo}}).sort({'createdAt':-1})
                const userList = await User.find().sort({'userName':1})
                res.render('adminpanel.ejs', { lists: closingLists, user: req.user, users: userList}
                )
            } else if (req.user.isAdmin == false) {
                res.render('index.ejs')
            }
        }catch(err){
            console.log(err)
        }
    },
}