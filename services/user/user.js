class UserServices {

    #userBusiness


    constructor({ UserBusiness }) {
        this.#userBusiness = UserBusiness;
     }
 

    async create(userData) {
        try {
            const user = { ...userData };
            const userDTO = this.#userBusiness.createUser(user);
    
            return userDTO;
            
        } catch (error) {
            console.error(error)
        }
    }

    async update(id, user) {
        try {
            const userData = { ...user };
            await this.#userBusiness.updateUser(id, userData);
        } catch (error) {
            console.error(error)
        }
    }

    async getAll() {
        const usersDTO = await this.#userBusiness.getAllUsers();
        return usersDTO;
    }

    async get(id) {
        const userDto = await this.#userBusiness.getUser(id);
        return userDto;
    }

    async delete(id) {
        await this.#userBusiness.deleteUser(id);
    }
}

module.exports = UserServices;