import User from '../model/User.js'


export  const getAllUser = async (req, res, next) => {
    let users;
    try {
      users = await User.find();
    } catch (err) {
      console.log(err);
    }
    if (!users) {
      return res.status(404).json({ message: "No Users Found!" });
    }
    return res.status(200).json({ users });
  };
export  const signup = async (req, res, next) => {
    let existingUser;
    try {
      users = await User.find();
    } catch (err) {
      console.log(err);
    }
    if (!existingUser) {
      return res.status(404).json({ message: "No Users Found!" });
    }
    return res.status(200).json({ users });
  };

// export  const signup = async (req, res, next) => {
//   const {name, email, password } = req.body;
// let existingUser;
// try{
//   existingUser = await User.findOne({email});
// } catch{
//  return console.log(err)
// }
// if (existingUser) {
//   return res.status(400).json({message: "User Already Exists! Login Instead"})
// }

// const User =  new User({
//   name,
//   email,
//   password
// });

// try{
// await User.save()
// } catch {
//   return console.log(err);
// }
// return res.status(201).json({User})
//   };

