// Class
const User = require('../model/user.model');

class UserRepository {

    constructor() {}

    async save(userDAO){
        // Create User Object
        const newUser = new User(userDAO)

        // Db save Object collection Users.
        const userCreated = await newUser.save()

        // Return document
        return userCreated;
    }

    async updateById(id, user) {
        await User.updateOne({ id }, { $set: user });
    }

    async all(){
        const usersDB = await User.find();
        return usersDB;
     }

     async getById(id) {
        const userDB = await User.findOne({ id });
        return userDB;
    }

    async deleteById(id) {
        await User.deleteOne({ id });
    }
        
}

module.exports = UserRepository;