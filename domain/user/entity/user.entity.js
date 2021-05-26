class User {


    constructor(user) {
        this.id = user.id
        this.name = user.name
        this.email = user.email
        this.registrationDate = user.registrationDate
    }

    getData() {
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            registrationDate: this.registrationDate
        }
    }
}


module.exports = User;