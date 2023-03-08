// console.log("hello world");
//  load express module
const { urlencoded } = require("express")
const express = require("express");
// npm install cookie-parser
const cookieParser = require("cookie-parser")
// npm install jsonwebtoken@8.5.1
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
const app = express();
const mongoSchema = require("./dataBase");

const hbs = require("hbs");
const Detail = require("./models/Detail")
const mongoose = require("mongoose");

const verifyToken = require("./verifytoken")



const HomePho = require("./models/homePho");
const Programs = require("./models/programs");
const placementPartners = require("./models/placementPa");
const PlacedSt = require("./models/placedSt");
const RegBtn = require("./models/regBtn");
const programHeading = require("./models/programHead");
const PlacedStHead = require("./models/placdStHead");
const NewRegSt = require("./models/newRegister");
const bodyParser = require("body-parser");
// const verification = require("../../../san/fullStack_project/verifyToken");

// const routes = require("./routes/main");

// middleware
// middleware
// app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());


// /static/css/style.css
// to make static file & it helps to access the file using static - ex - /static/css/style.css 
app.use("/static", express.static("public"))
// app.use('', routes);

// template engine 
// configuration
app.set('view engine', "hbs"); // which engine we are using
// errorr
// const viewspath = path.join(__dirname,"../views")
// console.log(viewspath);
app.set("views", "views")  // where we are place views directory

// partials in hbs language, we can make components in partials that we can serve in any routes pages
// ex : if i want to make navbar in 4 pages we have to write 4 times code. but if we want to make changes
//   ageain we have to change everythiing. if i change any data form partials component it will changes the all data in navbar.
hbs.registerPartials("views/partials");
const { route } = require('express/lib/application');

mongoose.set('strictQuery', true);

// atlas connected here --- * ---
const db = "mongodb+srv://sanjayacharya992:unlockno010203@cluster0.yknn4iq.mongodb.net/my_project?retryWrites=true&w=majority"
// const db = "mongodb://localhost:27017/my_project"

mongoose.connect(db, () => {

    console.log("mongo-db successfull");
})

const MySchema = new mongoose.model("details", Detail);
const myHomePho = new mongoose.model("homePho", HomePho);
const myProgram = new mongoose.model("programs", Programs);
const User = new mongoose.model("user_collection", mongoSchema);
const placement = new mongoose.model("placecolabs", placementPartners);
const placedstud = new mongoose.model("placedstudents", PlacedSt);
const registrationBtn = new mongoose.model("regbutton", RegBtn);
const programHead = new mongoose.model("programheadtitle", programHeading);
const placedStHeadingLine = new mongoose.model("placestudenttitle", PlacedStHead);
const regStudents = new mongoose.model("newregistration", NewRegSt);
// title : String,
const placedStHeadFun = async () => {
    const placeStHeadObj = new placedStHeadingLine({
        title: "Here from our Students for Full Stack Developer Course With Placement"
    })
    //  const result = await placeStHeadObj.save();
    // console.log(result);
}
// placedStHeadFun();


// title : String,

const programHeadFun = async () => {
    const programHeadObj = new programHead({
        title: "Our programs",
        test: "this is for testing",
    })
    // const result = await programHeadObj.save();
    // console.log(result);
}
// programHeadFun();
// button : String,
// title : String,

const regButtonFun = async () => {
    const regBtnObj = new registrationBtn({
        title: "Get callback from our admission team to find out which course will be best for your Placement!",
        button: "Register",
    })
    // const result = regBtnObj.save();
    // console.log(result);
}
// regButtonFun();

// name : String,
// description : String,
const insertPlacedSt = async () => {
    const placedStObj1 = new placedstud({
        name: "Vineet verma (B.tech)",
        description: "I would strongly recommend e-learning for full stack development because of the instructors and management. Astudent can know his potential quickly and can enhance it with Instructors. Instructors in e-learning are socalm and knowledgable they can help you in every possible step which make you to achieve your goal."
    })
    const placedStObj2 = new placedstud({
        name: "Shreyas kunal (BSC)",
        description: "Its was a very knowledgeable course I learnt many things while pursing this course and the Instructor, mentors as well as teaching Assistant all provided me a updated knowledge and helped me in each and every step. Finally thanks to e-learning for providing this valuable course to me for achieving goal"
    })
    const placedStObj3 = new placedstud({
        name: "Sanvi arora (BCA)",
        description: "I would strongly recommend e-learning for full stack development because of the instructors and management. Astudent can know his potential quickly and can enhance it with Instructors. Instructors in e-learning are socalm and knowledgable they can help you in every possible step which make you to achieve your goal."
    })
    const placedStObj4 = new placedstud({
        name: "Anvita naik (B.tech/CSE)",
        description: "Its was a very knowledgeable course I learnt many things while pursing this course and the Instructor, mentors as well as teaching Assistant all provided me a updated knowledge and helped me in each and every step. Finally thanks to e-learning for providing this valuable course to me for achieving goal"

    })
    const placedStObj5 = new placedstud({
        name: "Keval sharma (B.tech/ME)",
        description: "I would strongly recommend e-learning for full stack development because of the instructors and management. Astudent can know his potential quickly and can enhance it with Instructors. Instructors in e-learning are socalm and knowledgable they can help you in every possible step which make you to achieve your goal."
    })
    const placedStObj6 = new placedstud({
        name: "Ankush (B.tech/ECE)",
        description: "Its was a very knowledgeable course I learnt many things while pursing this course and the Instructor, mentors as well as teaching Assistant all provided me a updated knowledge and helped me in each and every step. Finally thanks to e-learning for providing this valuable course to me for achieving goal"

    })
    const placedStObj7 = new placedstud({
        name: "keerthi (B.tech/CSE)",
        description: "I would strongly recommend e-learning for full stack development because of the instructors and management. Astudent can know his potential quickly and can enhance it with Instructors. Instructors in e-learning are socalm and knowledgable they can help you in every possible step which make you to achieve your goal."
    })
    const placedStObj8 = new placedstud({
        name: "Hemanth (BSC)",
        description: "Its was a very knowledgeable course I learnt many things while pursing this course and the Instructor, mentors as well as teaching Assistant all provided me a updated knowledge and helped me in each and every step. Finally thanks to e-learning for providing this valuable course to me for achieving goal"

    })
    // const result = await placedstud.insertMany([placedStObj1,placedStObj2,placedStObj3,placedStObj4,placedStObj5,placedStObj6,placedStObj7,placedStObj8]);
    // console.log(result);
}

// insertPlacedSt ();



// company : String,
//         location : String,
//         description : String,
//         add : String
const insertPlacement = async () => {

    const placementObj1 = new placement({
        company: "TCS",
        location: "Banglore",
        description: "hiring MERN stack developer",
        add: "hybrid & Remote",
    })
    const placementObj2 = new placement({
        company: "infosys",
        location: "chennai",
        description: "hiring JAVA developer",
        add: "hybrid & Remote",
    })
    const placementObj3 = new placement({
        company: "Google",
        location: "hydrabad",
        description: "hiring MEAN stack developer",
        add: "hybrid & Remote",
    })
    const placementObj4 = new placement({
        company: "Microsoft",
        location: "chennai",
        description: "hiring data scientists",
        add: "hybrid & Remote",
    })
    const placementObj5 = new placement({
        company: "Ola",
        location: "Banglore",
        description: "hiring android/iOS developer",
        add: "hybrid & Remote",
    })
    const placementObj6 = new placement({
        company: "Uber",
        location: "Delhi NCR",
        description: "hiring MERN stack developer",
        add: "hybrid & Remote",
    })



    // const result = await placement.insertMany([placementObj1,placementObj2,placementObj3,placementObj4,placementObj5,placementObj6]);
    // console.log(result);
};

// insertPlacement()

const insertMultipleData = async () => {
    const myProgram1 = new myProgram({
        icon: "fa-solid fa-code",
        title: "The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert",
        description: "JUST COMPLETELY REDONE! Master SQL, Work With Complex Databases, Build Reports, and Many courses in one!",
        add: "-> recorded sessions are available"
    })

    const myProgram2 = new myProgram({
        icon: "fa-solid fa-code",
        title: "The Complete JavaScript Course 2023: From Zero to Expert!",
        description: "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
        add: "-> recorded sessions are available"

    })
    const myProgram3 = new myProgram({
        icon: "fa-solid fa-code",
        title: "The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert",
        description: "JUST COMPLETELY REDONE! Master SQL, Work With Complex Databases, Build Reports, and Many courses in one!",
        add: "-> recorded sessions are available"

    })
    const myProgram4 = new myProgram({
        icon: "fa-solid fa-code",
        title: "Teach Your Kids to Code: Learn to java Python at Any Age!",
        description: "",
        description: "Short, colorful apps and games you can use to teach and learn programming at any age! Chromebook, PC, Mac and Linux!",
        add: "-> recorded sessions are available"

    })
    const myProgram5 = new myProgram({
        icon: "fa-solid fa-code",
        title: "Node.js, Express, MongoDB & More: The Complete Bootcamp 2023",
        description: "Master Node by building a real-world RESTful API and web app (with authentication, Node.js security, payments & more)",
        add: "-> recorded sessions are available"


    })
    const myProgram6 = new myProgram({
        icon: "fa-solid fa-code",
        title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
        description: "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!",
        add: "-> recorded sessions are available"

    })


    // const result = await myProgram.insertMany([myProgram1, myProgram2, myProgram3, myProgram4, myProgram5, myProgram6]);
    // console.log(result);
}
// insertMultipleData()

const myHomePhoObj = new myHomePho(
    {
        homyUrl : "/static/images/homy.jpg",
        h1 : "E-Learning Courses",
        h3 : "Achieve your Dream Carrier",
        rightImg : "/static/images/right.jpg",
        rightText1 : "Flexible Evening Classes",
        rightText2 : "Placement Focused Courses",
        rightText3 : "Complete Placement Preparation",


    }
)

// const displayData = async ()=>{
// const v = await myHomePhoObj.save();
// console.log(v);
// }
// displayData();

const mySchemaObj = new MySchema(
       {
        brandName: "e-learning",
        brandIconUrl: "https://res.cloudinary.com/practicaldev/image/fetch/s--KCRN0Wuf--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/356/ceb8dc0f-a77b-4f89-84da-52216a4286e1.png",
        links: [{
            label: "Home",
            url: "/home"
        },
        {
            label: "Services",
            url: "service"
        },
        {
            label: "gallery",
            url: "/gallery"
        },
        {
            label: "none",
            url: "/empty"
        },
        {
            label: "contact-US",
            url: "contact"
        },
        ]
    }
);

// mySchemaObj.save();



// -----------------------------------------
// 1) one way to get data from data base (comment above code and run this)
// const myData = async () =>{
// const d = await mySchemaObj.save();
// console.log(d);

// }
// myData()

// -----------------------------------------
// 2) one way to get data from data base


// -----------------------------------------
// consoling data here
// getData = async () => {
// const data = await MySchema.findOne({_id:"63f91957a6378c5fd83965a3"});
// console.log(data);
// }
// getData();
// -----------------------------------------



// console.log(ban);

app.get("/login", async (req, res) => {
    res.sendFile(__dirname + "/login.html", (err) => {
        if (err) {
            console.log("error while loading login page", err);
        }
    });
    // })
});


// })

app.get("/register", async (req, res) => {
    const display = await MySchema.findOne({ _id: "63fcdd42d4367b938ff97735" });
    res.sendFile(__dirname + "/register.html", (err) => {
        if (err) {
            console.log("error while loading login page", err);
        }
    });
    // programs : programs,
})



app.get("/home", verifyToken, async (req, res) => {
    // app.get("/home", async (req, res) => {

    const display = await MySchema.findOne({ _id: "63fcdd42d4367b938ff97735" });
    // console.log(display);
    // 63fcdd75642c9ca36714bfec
    const homePho = await myHomePho.findOne({ _id: "63fcdd75642c9ca36714bfec" })
    // console.log(homePho);
    const programs = await myProgram.find();
    const placecolabs = await placement.find()
    const placedstudents = await placedstud.find()
    const regbutton = await registrationBtn.findOne({ _id: "6400d9c5d9dbd8421deb0458" })
    // console.log(regbutton);
    const programHeadingTitle = await programHead.findOne({ _id: "6400e0169b96cf1369240387" })
    // console.log(programHeadingTitle);
    const placedStHeadLine = await placedStHeadingLine.findOne({ _id: "6400e2ed504d588d0c16cfa8" })
    // console.log(placedStHeadLine);
    return res.render("index", {
        //  initialized variable in home route for fetching inside the handlebars(hbs);
        display: display,
        homePho: homePho,
        programs: programs,
        placecolabs: placecolabs,
        placedstudents: placedstudents,
        regbutton: regbutton,
        programHeadingTitle: programHeadingTitle,
        placedStHeadLine: placedStHeadLine,
    })
    // res.sendFile(__dirname + "/home.html", (err) => {
    //     if(err){
    //         console.log("Error while loading home page", err)
    //     }
    // })

})
app.get("/gallery", async (req, res) => {
    const display = await MySchema.findOne({ _id: "63fcdd42d4367b938ff97735" });
    // console.log(display);
    res.render("gallery", {
        display: display
    })
    // res.sendFile(__dirname + "../views/gallery.html")
})

app.get("/placement", (req, res) => {
    return res.sendFile(__dirname + "/dev.html")
})

// ----------------------------------------------------
// user login

app.post('/userLogin', async (req, res) => {
    const data = req.body;
    let user_password = data.password;
    let user_email = data.email;
    const user_data = await User.findOne({ email: user_email })
    // console.log(user_data);
    if (!user_data) {
        res.status(400)
        //    return res.send("User doesn't exist"); 
        return res.sendFile(__dirname + "/userDexist.html");

    }
    let db_password = user_data.password;
    //matching password
    const isValid = await bcrypt.compare(user_password.toString(), db_password);

    //taking action for incorrect password
    if (!isValid) {
        res.status(400)
        // return res.send("Incorrect Password")
        return res.sendFile(__dirname + "/wrongPass.html")

        // return alert("incorrect password")
    }

    //generate token
    const token_to_send = jwt.sign({ id: user_data._id }, "mySecretKey", { expiresIn: '1h' })
    res.cookie('token_name', token_to_send);
    return res.redirect('/home')
})

// ----------------------------------------------------
// SIGNUP

app.post('/userSignup', async (req, res) => {
    const data = req.body;
    if (data.password !== data.cpassword) {
        // return res.send("Incorrect Password");
        return res.sendFile(__dirname + "/wrongPass.html")

    }
    let user_name = data.name;
    let user_email = data.email;
    let user_password = data.password;
    if (!user_name || !user_email || !user_password) {
        // return res.status(400).res.send("Fields are empty")
        return res.sendFile(__dirname + "/emptyField.html")

    }
    const user_data = await User.findOne({ email: user_email })
    if (user_data) {
        res.status(400);
        // return res.send("User already exists");
        return res.sendFile(__dirname + "/userExist.html")

    }
    const salt = await bcrypt.genSalt(10)
    let hashed_password = await bcrypt.hash(user_password.toString(), salt)
    // hashed_password = hashed_password.toString()
    const data_to_store = new User({ name: user_name, email: user_email, password: hashed_password })
    const result = await data_to_store.save()
    return res.redirect('/login')
})

// ----------------------------------------------------
app.post("/logout", (req, res) => {
    res.clearCookie("token_name");
    return res.redirect("/login")
})

// ----------------------------------------------------
// registration 
app.post("/submit", async (req, res) => {
    // res.send("form submitted");
    const data = req.body;
    const user_email = data.email;
    const user_phone = data.phone;
    const user_query = data.query;
    if (!user_email || !user_phone || !user_query) {
        res.status(400)
        // return res.send("Fields are empty")
        // return res.sendFile(__dirname + "/refresh.html")
        return res.sendFile(__dirname + "/refresh.html")


    }
    console.log(req.body);
    const newStudent = new regStudents({ email: user_email, phone: user_phone, query: user_query })
    try {
        const result = await newStudent.save()
        // console.log(result);
        return res.sendFile(__dirname + "/thanku.html");
    }
    catch (e) {
        console.log(e);
    }
})
// ----------------------------------------------------

app.listen(5002, () => {
    console.log("server is loading : 5002");
});
