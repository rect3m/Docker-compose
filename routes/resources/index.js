const { createResource } = require("./createResource.js");
const { getResource } = require("./getResource.js");
const { getResources } = require("./getResources.js");
const { updateResource } = require("./updateResource.js");
const { deleteResource } = require("./deleteResource.js");
// const { buyResources } = require("./buyResource");

module.exports.resourcesRouter = async function (fastify, opts) {
    fastify.route(createResource);
    fastify.route(getResources);
    fastify.route(getResource);
    // fastify.route(buyResources);
    fastify.route(updateResource);
    fastify.route(deleteResource);
};
