const dotenv = require('dotenv').config();

class App {

    #server

    constructor({ Server }) {
        this.#server = Server;
    }

    async start() {
        await this.#server.start();
    }
}

module.exports = App;