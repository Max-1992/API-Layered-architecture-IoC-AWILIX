class IdGenerator {

    #IdGeneratorService;

    constructor({ IdGeneratorService }) {
        this.#IdGeneratorService = IdGeneratorService;
    }

    generate() {
        const id = this.#IdGeneratorService.generateId()
        return id;
    }
}

module.exports = IdGenerator;