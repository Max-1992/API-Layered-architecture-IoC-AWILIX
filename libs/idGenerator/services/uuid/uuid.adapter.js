const uuid = require('uuid')

class UuidAdapter {
    constructor() {}

    generateId() {
        const id = uuid.v4()
        return id;
    }
}

module.exports = UuidAdapter;