class UserMapperDB {
    constructor() {}

    buildDomainEntityDB(userDto) {
        const { id, name, email, password, role, registrationDate } = userDto;
        const userDao = { id, name, email, password, role, registrationDate };
        return userDao;
    }

}

module.exports = UserMapperDB;