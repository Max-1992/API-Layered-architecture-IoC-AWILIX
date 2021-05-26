const { Router } = require('express');

class UserRoutes {

    #userController
    #router

    constructor({ UserController }) {
        this.#userController = UserController
        this.#router = Router();
        this.setRoutes();
    }

    setRoutes() {
        this.#router.post('/add', this.#userController.createUser.bind(this.#userController));
        this.#router.put('/update/:id', this.#userController.updateUser.bind(this.#userController));
        this.#router.delete('/delete/:id', this.#userController.deleteUser.bind(this.#userController));
        this.#router.get('/all', this.#userController.getAllUsers.bind(this.#userController));
        this.#router.get('/:id', this.#userController.getUser.bind(this.#userController));
    }

    getRoutes() {
        return this.#router;
    }

}


module.exports = UserRoutes;




