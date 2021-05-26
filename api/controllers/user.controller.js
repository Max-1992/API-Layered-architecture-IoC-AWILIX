class UserController {

    #userServices

    constructor({ UserServices }) {
        this.#userServices = UserServices;
    }

    async createUser(req, res) {
        try {
            // Get user data from request
            const user = req.body
            
            // Call the user creation service.
            const userCreated = await this.#userServices.create(user);

            res.status(200).json({ ok: true, userCreated })

        } catch (err) {
            res.status(400).json({error: err.message})
        }
    }

    async updateUser(req, res) {
        try {
            // Get id from path params
            const { id } = req.params

            // Get user data from request
            const user = req.body
 
            // Call the user creation service.
            await this.#userServices.update(id, user)

            const message = `User data was updated successfully.`

            res.status(200).json({ ok: true, message })

        } catch (err) {
            res.status(400).json({error: err.message})
        }
    }

    async getAllUsers(req, res) {
        const usersDto = await this.#userServices.getAll();
        res.status(200).json({ ok: true, data: usersDto });
    }

    async getUser(req, res) {
        try {
            // Get userId from request
            const { id } = req.params;
            const userDto = await this.#userServices.get(id);

            res.status(200).json({ ok: true, user: userDto });
        } catch (err) {
            res.status(400).json({error: err.message})
        }
    }

    async deleteUser(req, res) {
        try {
            // Get userId from request
             const { id } = req.params;
             await this.#userServices.delete(id);
             const message = `User data was successfully deleted.`;
 
             res.status(200).json({ ok: true, message });
        } catch (err) {
             res.status(400).json({error: err.message})
        }
     }

}

module.exports = UserController;