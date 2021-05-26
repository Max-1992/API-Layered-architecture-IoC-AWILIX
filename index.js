const container = require('./api/container');

const application = container.resolve("app");
const database = container.resolve("db");

application.start()
.then(async () => await database.connect() )
.catch(e => console.log(e))