//Controllers
const {
  Course: { addCourse, deleteCourse, getAllCourses, getCourse, updateCourse },
} = require("../controllers");

//Constants
const { URL_PREFIX } = require("../constants");

const routes = [
  {
    method: "GET",
    url: URL_PREFIX + "/courses",
    preHandler: async (request, reply) => {}, // E.g. check authentication
    handler: getAllCourses,
  },
  {
    method: "GET",
    url: URL_PREFIX + "/courses/:id",
    preHandler: async (request, reply) => {},
    handler: getCourse,
  },
  {
    method: "POST",
    url: URL_PREFIX + "/courses",
    preHandler: async (request, reply) => {},
    handler: addCourse,
  },
  {
    method: "PUT",
    url: URL_PREFIX + "/courses/:id",
    preHandler: async (request, reply) => {},
    handler: updateCourse,
  },
  {
    method: "DELETE",
    url: URL_PREFIX + "/courses/:id",
    preHandler: async (request, reply) => {},
    handler: deleteCourse,
  },
];

module.exports = routes;
