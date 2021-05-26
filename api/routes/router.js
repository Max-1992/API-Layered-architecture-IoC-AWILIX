class Router {

    #userRoutes

    constructor({ UserRoutes }) {
        this.#userRoutes = UserRoutes.getRoutes();
    }

    setUpRoutes(server) {
        server.use('/api/user', this.#userRoutes);
    }

}

module.exports = Router


