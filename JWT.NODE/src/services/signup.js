const User = require("../models/user");
const bcrypt = require("bcrypt");
async function createUser(userData){
    const{name, email, password } = userData;
    const hashedPassword = bcrypt.hash(password, 10);
    const createdUser = new User({
        name,
        email,
        hashedPassword,
        role: "Customer"
    });

    const savedUser = await createUser.save();
    return savedUser;
}
module.exports = {createUser};