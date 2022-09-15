
const User = require('../models/User')
const ClosingList = require('../models/ClosingList')


//fetches admin panel page if user has admin status
module.exports = {
    getAdminPanel: async (req,res)=>{
        let sDay = new Date(req.query.startDate);
        let eDay = new Date(req.query.endDate);  
        try{
            if (sDay == 'Invalid Date' || eDay == 'Invalid Date'){
                console.log('the if')
                sDay = new Date();
                eDay = new Date();
                sDay.setDate(sDay.getDate()-5);
                sDay.setHours(0)
                sDay.setMinutes(0)
                sDay.setSeconds(0)
                sDay.setMilliseconds(0)
            }
            sDay.setUTCHours(0)
            sDay.setUTCMinutes(0)
            sDay.setUTCSeconds(0)
            sDay.setUTCMilliseconds(0)
            eDay.setUTCHours(23)
            eDay.setUTCMinutes(59)
            eDay.setUTCSeconds(59)
            eDay.setUTCMilliseconds(999)

            if (req.user.isAdmin == true) {
                const closingLists = await ClosingList.find({createdAt: {$gte: sDay, $lte: eDay}}).sort({'createdAt':-1})
                const userList = await User.find().sort({'userName':1})
                res.render('adminpanel.ejs', { lists: closingLists, user: req.user, users: userList, sDay: sDay, eDay: eDay}
                )
            } else if (req.user.isAdmin == false) {
                res.render('index.ejs')
            }
        }catch(err){
            console.log(err)
        }
    },
}