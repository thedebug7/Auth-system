import User from '../models/User.js'

// 🟢 Signup Controller

const test =async (req,res) => {
    res.json({ message: "Auth route is working!" });
}

const getUsers = async (req,res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Server error" }); 
    }
}

const signup = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        // check if user is alredy exists.
        const existuser = await User.findOne({email});
        if(existuser){
           return res.status(400).json({ message: "User already exist" });
        }

        //if User is new Then creace new user 
        const NewUser = new User({name,email,password});
        // Save the new data to the MongoDb database.
        await NewUser.save()

        res.status(201).json({message: "User registered successfully"});
    } catch (error) { 
        res.status(500).json({ message: "Server error" });
    }

}

export default {
    signup,
    test,
    getUsers
};