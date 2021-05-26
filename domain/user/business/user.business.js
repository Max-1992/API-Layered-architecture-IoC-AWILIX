class UserBusiness {

    #userMapper
    #userMapperDB
    #userRepository
    #userMapperDto
    #idGenerator
    #userCacheRepository

    constructor({ IdGenerator, UserMapper, UserMapperDB, UserMapperDto, UserRepository, UserCacheRepository }) {
        this.#idGenerator = IdGenerator
        this.#userMapper = UserMapper;
        this.#userMapperDB = UserMapperDB;
        this.#userMapperDto = UserMapperDto;
        this.#userRepository = UserRepository;
        this.#userCacheRepository = UserCacheRepository;

    }

    async createUser(user) {
        // Create a unique Id for our user.
        user.id = this.#idGenerator.generate();

        user.registrationDate = new Date();

        const userDB = this.#userMapperDB.buildDomainEntityDB(user);

        // Call the repository method to create new user.
        const userCreated = await this.#userRepository.save(userDB)

        if (!userCreated) {
            throw Error("We could not create the user")
        }

        const userDomain = this.#userMapper.buildDomainEntity(userCreated);

         // Almacenar datos en cache
         await this.#userCacheRepository.save(userDomain);

        const userDto = this.#userMapperDto.buildUserDto(userDomain);

       

        return userDto;
    }

    async updateUser(id, user) {
        try {
            await this.#userRepository.updateById(id, user);
        } catch (error) {
            console.error(error)
        }
    }

    async getAllUsers() {
        const usersDB = await this.#userRepository.all()
        const usersDomain = usersDB.map(userDB => this.#userMapper.buildDomainEntity(userDB));
        const usersDto = usersDomain.map(userDomain => this.#userMapperDto.buildUserDto(userDomain));
        return usersDto;
    }

    async getUser(id) {
        const userDB = await this.#userRepository.getById(id);
        const userDomain = this.#userMapper.buildDomainEntity(userDB);
        const userDto = this.#userMapperDto.buildUserDto(userDomain);
        return userDto;
    }

    async deleteUser(id) {
        await this.#userRepository.deleteById(id);
    }

}

module.exports = UserBusiness;