const UserDto = require('./user.dto')

class UserMapperDto {
    constructor() {}

    buildUserDto(userDomain) {
        const userDto = new UserDto(userDomain);
        return userDto
    }
}

module.exports = UserMapperDto;