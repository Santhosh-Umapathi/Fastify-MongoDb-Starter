//Controllers
const {
  User: { addUser, deleteUser, getAllUsers, getUser, updateUser },
} = require("../controllers");

//Constants
const { URL_PREFIX } = require("../constants");

const userRoutes = [
  {
    method: "GET",
    url: URL_PREFIX + "/users",
    preHandler: async (request, reply) => {}, // E.g. check authentication
    handler: getAllUsers,
  },
  {
    method: "GET",
    url: URL_PREFIX + "/users/:id",
    preHandler: async (request, reply) => {},
    handler: getUser,
  },
  {
    method: "POST",
    url: URL_PREFIX + "/users",
    preHandler: async (request, reply) => {},
    handler: addUser,
  },
  {
    method: "PUT",
    url: URL_PREFIX + "/users/:id",
    preHandler: async (request, reply) => {},
    handler: updateUser,
  },
  {
    method: "DELETE",
    url: URL_PREFIX + "/users",
    preHandler: async (request, reply) => {},
    handler: deleteUser,
  },
];

module.exports = userRoutes;
