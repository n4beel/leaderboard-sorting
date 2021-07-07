const user = require('./data/user');
const leaderBoard = require('./data/leaderboard');
const Boom = require('boom');
const faker = require('faker');
const jwt = require('jsonwebtoken');

const users = [user];

const assignRoutes = (server) => {
    server.post('/users/login', async (request, reply) => {
        if (!request.body?.login?.trim() || !request.body?.password?.trim()) {
            throw Boom.badRequest('Wrong login or password');
        }
        const user = users.find(u => u.login === request.body.login && u.password === request.body.password)
        if (user) {
            return {
                user: {
                    ...user
                },
                token: jwt.sign({
                    exp: Math.floor(Date.now() / 1000) + (60 * 60 * 60),
                    data: user
                }, 'secret')
            };
        }
        throw Boom.badRequest('Wrong login or password');
    });

    server.post('/users/sign-up', async (req) => {
        if (!req.body?.login || !req.body?.password) {
            throw Boom.badData('Missing data for sing-up');
        }

        const user = users.find(u => u.login === req.body.login)
        if (user) {
            throw Boom.conflict(`Such user already exists`)
        }

        const newUser = {
            userId: faker.datatype.uuid(),
            firstName: faker.name.findName(),
            lastName: faker.name.lastName(),
            login: req.body.login,
            password: req.body.password,
            score: faker.datatype.number(),
            age: faker.datatype.number(),
            rank: -1
        };

        users.push(newUser);

        return { result: true };
    })

    server.get('/users/leaderboard', async req => {
        if (!req.headers.authorization) {
            throw Boom.unauthorized(`JWT token is not provided in Authorization header`);
        }
        try {
            const decoded = jwt.verify(req.headers.authorization.replace('Bearer ', ''), 'secret');
            const user = users.find(u => u.login === decoded.data.login);
            if (!user) {
                throw Boom.unauthorized(`User in JWT token is invalid or does not exists`);
            }
        } catch (e) {
            if (e.isBoom) {
                throw e;
            }
            throw Boom.unauthorized(`Invalid token provided`);
        }


        return leaderBoard();
    })
}

module.exports = { assignRoutes }