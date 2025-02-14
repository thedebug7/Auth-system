import User from '../models/User.js'

// 🟢 Signup Controller

const signup = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        // check if user is alredy exists.
        const existuser = await User.findOne({email});
        if(existuser){
            res.status(400).json({ message: "User already exist" });
        }

        //if User is new Then creace new user 
        const NewUser = new User({name,email,password});
        // Save the new data to the MongoDb database.
        await NewUser.save()

        res.status(201).json({message: "User registered successfully"});
    } catch (error) { 

        
    }

}