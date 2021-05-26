// Conection
const redis = require('../../connect')

class UserCacheRepository {

    constructor() {}

    async save(user) {
        const key = `user:${user.id}`;
        const operation = await redis.set(key, JSON.stringify(user), 'EX', 3600);
        return operation;
    }

    async read(id) {
        const operation = await redis.get(id)
        return operation;
    }
    
}

module.exports = UserCacheRepository;