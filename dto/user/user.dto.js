class UserDto {
    constructor(userDomain) {
        this.id = userDomain.id
        this.name = userDomain.name
        this.email = userDomain.email
        // this.registrationDate = userDomain.registrationDate
    }
}

module.exports = UserDto;