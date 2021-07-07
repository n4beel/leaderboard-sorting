const faker = require('faker');
const lodash = require('lodash')

module.exports = () => {
    const leaderBoard = [];
    for (let i = 0; i < 45; i++) {
        leaderBoard.push({
            rank: i + 1,
            userId: faker.datatype.uuid(),
            firstName: faker.name.findName(),
            lastName: faker.name.lastName(),
            login: faker.internet.email(),
            score: faker.datatype.number(),
            age: faker.datatype.number()
        })
    }
    return lodash.shuffle(leaderBoard);
}