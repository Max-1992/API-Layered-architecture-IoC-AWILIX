// Requiere Modules
const db = require('mongoose');

class MongoDatabase {

    #config

    constructor({ config }) {
        this.#config = config;
    }

      async connect () {
        await db.connect( this.#config.DATABASE , { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
        console.log(`Database is connected on`, `${this.#config.DATABASE}`);
    }
    
    async disconnect () {
        await db.connection.close();
        console.log(`Database is disconnect`.green);
    };
}

module.exports = MongoDatabase;