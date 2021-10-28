//Controllers
const {
  Course: { addCourse, deleteCourse, getAllCourses, getCourse, updateCourse },
} = require("../controllers");

const routes = [
  {
    method: "GET",
    url: "/api/courses",
    // schema: {
    //   // request needs to have a querystring with a `name` parameter
    //   querystring: {
    //     // name: { type: "string" },
    //   },
    //   // the response needs to be an object with an `hello` property of type 'string'
    //   response: {
    //     200: {
    //       type: "object",
    //       properties: {
    //         hello: { type: "string" },
    //       },
    //     },
    //   },
    // },
    preHandler: async (request, reply) => {
      // E.g. check authentication
    },
    handler: getAllCourses,
  },
  {
    method: "GET",
    url: "/api/courses/:id",
    handler: getCourse,
  },
  {
    method: "POST",
    url: "/api/courses",
    handler: addCourse,
  },
  {
    method: "PUT",
    url: "/api/courses/:id",
    handler: updateCourse,
  },
  {
    method: "DELETE",
    url: "/api/courses/:id",
    handler: deleteCourse,
  },
];

module.exports = routes;
