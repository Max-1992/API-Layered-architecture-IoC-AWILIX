const User = require('../entity/user.entity');

class UserMapper {
    constructor() {}

    buildDomainEntity(user) {
        const userDomain = new User(user);
        return userDomain;
    }
}

module.exports = UserMapper;