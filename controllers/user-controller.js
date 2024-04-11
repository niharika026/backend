import User from '../model/User.js'
import bcrypt from "bcryptjs";

export const getAllUser = async (req, res, next) => {
  try {
    let users = await User.find();
    if (!users) {
      return res.status(404).json({ message: "No Users Found!" });
    }
    return res.status(200).json({ users });
  } catch (err) {
    return res.status(400).json({ message: "Something went wrong" });
  }
};


export const signup = async (req, res, next) => {
  console.log(req.body)
  const { name, email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    console.log(err)
  }
  if (existingUser) {
    return res.status(400).json({ message: "User Already Exists! Login Instead" })
  }
const hashedpassword = bcrypt.hashSync(password);

  const newUser = new User({
    name,
    email,
    password: hashedpassword,
  });

  try {
    await newUser.save()
  } catch (err) {
    console.log(err);
  }
  return res.status(201).json({ user: newUser })
};

 export const login = async (req, res, next) => {
  const {  email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    console.log(err)
  }
  if (!existingUser) {
    return res.status(404).json({ message: "not find user by this email" });
  }
  const ispasswordCorrect = bcrypt.compareSync(password,existingUser.password);
  if(!ispasswordCorrect) {
    return res.status(400).json({message: "Incorrect password"});
  }
  return res.status(200).json({message: "Login Successful"});

}