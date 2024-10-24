module.exports = {
    async echoRouter(fastify) {
        fastify.post("/echo", async (request) => {
            console.log("test");
            return request.body; // Echo the received data
        });
    },
};
