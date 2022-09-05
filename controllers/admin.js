
const User = require('../models/User')
const ClosingList = require('../models/ClosingList')


//fetches admin panel page if user has admin status
module.exports = {
    getAdminPanel: async (req,res)=>{
        console.log(req.user.userName)
        try{
            let fiveDaysAgo = new Date();
            fiveDaysAgo.setUTCDate(fiveDaysAgo.getDate()-5);
            fiveDaysAgo.setHours(0)
            fiveDaysAgo.setMinutes(0)
            fiveDaysAgo.setSeconds(0)
            fiveDaysAgo.setMilliseconds(0)
            console.log(fiveDaysAgo)
            if (req.user.isAdmin == true) {
                const closingLists = await ClosingList.find({createdAt: {$gt: fiveDaysAgo}}).sort({'createdAt':-1})
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