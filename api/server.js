const dotenv = require('dotenv').config();
const express = require('express');

class Server {

    #app
    #config
    #router
    #setUp

    constructor({ config, SetUp, Router }){
        this.#app = express();
        this.#config = config;
        this.#setUp = SetUp;
        this.#router = Router;
        this.setUpMiddlewares();
        this.setUpRouter();
    }

    // Middlewares using our system
    setUpMiddlewares(){
        this.#setUp.setUpMiddlewares(this.#app);
    }

    // Router using our system
    setUpRouter() {
        this.#router.setUpRoutes(this.#app);
    }

    // Static File Folder Settings
    staticFiles(){
        this.app.use(express.static(path.join(__dirname, 'public')));
    }
    
    // Start the server
    start(){
        this.#app.listen(this.#config.PORT, () => {
            console.log(`Server is running on PORT: ${this.#config.PORT}`)
        });
    }
}

module.exports = Server;