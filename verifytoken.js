
// err because of key missing

// // ----------------------------------------------------
// const jwt = require('jsonwebtoken')


// const verifyToken = (req,res,next)=>{
//     // 82 token_name
//     const token = req.cookies.token_name;
//     try{
    // // err because mysecretkey was wrong
//         const user = jwt.verify(token, "mysecretkey"); //jwt toke next line -> 78
//         // req.user = user;
//         next()

//     }
//     catch(err){
//         //  82
//         console.log(err);
//         res.clearCookie("token_name");
//         return res.redirect("/login");
        
//     }
// }
// module.exports = verifyToken;




const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const token = req.cookies.token_name;
    try{
        const user = jwt.verify(token, "mySecretKey")
        req.user = user;
        next()
    }
    catch(err){
        res.clearCookie('token_name')
        return res.redirect('/login')
    }
}

module.exports = verifyToken;