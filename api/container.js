// Awilix
const { createContainer, asClass, asFunction, asValue } = require('awilix');

// Class - Application
const App = require('./index');
const Server = require('./server');
const SetUp = require('./setup');
const Router = require('./routes/router');

// Class - Controller
const { UserController } = require('./controllers');

// Class - Routes
const UserRoutes = require('./routes/user.routes');

// Class - Domain
const { UserMapper } = require('../domain');

// Class - Services
const { UserServices } = require('../services');

// Class - Business
const UserBusiness = require('../domain/user/business/user.business');

// Class - Repository
const UserRepository = require('../dataAccess/repositories/mongodb/user/userRepository/userRepository');

// Class - MapperDB
const UserMapperDB = require('../dataAccess/repositories/mongodb/user/mapper/user.mapper');

// Class - UserMapperDto
const UserMapperDto = require('../dto/user/user.dto.mapper')

// Class - Database Connection
const MongoDatabase = require('../dataAccess/repositories/mongodb/connect');

// Class cache repository
const { UserCacheRepository } = require('../dataAccess/repositories/redis')

// Values
const config = require('../config/environments');

// Libs
const { IdGenerator } = require('../libs');

// Libs dependencies
const UuidAdapter = require('../libs/idGenerator/services/uuid/uuid.adapter')

// Create container
const container = createContainer();

// Setup bindings
container.register({
    app: asClass(App).singleton(),
    Server: asClass(Server).singleton(),
    SetUp: asClass(SetUp).singleton(),
    Router: asClass(Router).singleton()
})
.register({
    db: asClass(MongoDatabase)
})
.register({
    UserRoutes: asClass(UserRoutes).singleton()
})
.register({
    UserController: asClass(UserController).singleton()
})
.register({
    config: asValue(config)
})
.register({
    UserServices: asClass(UserServices).singleton()
})
.register({
    UserBusiness: asClass(UserBusiness).singleton()
})
.register({
    UserMapper: asClass(UserMapper).singleton()
})
.register({
    UserMapperDto: asClass(UserMapperDto).singleton()
})
.register({
    UserRepository: asClass(UserRepository).singleton(),
    UserMapperDB: asClass(UserMapperDB).singleton()
})
.register({
    UserCacheRepository: asClass(UserCacheRepository).singleton()
})
.register({
    IdGeneratorService: asClass(UuidAdapter).singleton(),
    IdGenerator: asClass(IdGenerator).singleton(),
})

module.exports = container;