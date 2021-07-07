const fastify = require('fastify')({ logger: true });
const { assignRoutes } = require('./routes');

fastify.register(require('fastify-cors'), {
    origin: '*'
})

const server = fastify

assignRoutes(server);

server.setErrorHandler((error, request, reply) => {
    server.log.error(error);
    // @ts-ignore
    if (error.isBoom) {
        const { output } = error;
        reply.code(output.statusCode);
        reply.headers({ ...output.headers, 'Access-Control-Allow-Origin': '*' });
        reply.send(output.payload);
    } else {
        reply.headers({ 'Access-Control-Allow-Origin': '*' });
        reply.send(error);
    }
});

const start = async () => {
    try {
        await server.listen(3000, '0.0.0.0')
    } catch (err) {
        server.log.error(err)
        process.exit(1)
    }
}
start().then(() => console.log('Server started'))