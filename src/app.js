const fastify = require("fastify").default();
const mongoose = require("mongoose");
const { logSuccess, logError } = require("./utils/console");
require("dotenv").config();

//Routes
const { CourseRoutes, UserRoutes } = require("./routes");

//Constants
const { PORT, MONGO_DB_URL } = require("./constants");

//Initialize DB connection
mongoose
  .connect(MONGO_DB_URL)
  .then(() => logSuccess("Connected to Database:", process.env.DATABASE_NAME))
  .catch((err) =>
    logError("Connecting to Database:", process.env.DATABASE_NAME, err)
  );

//Routes
CourseRoutes.forEach((options) => fastify.route(options));

UserRoutes.forEach((options) => fastify.route(options));

//Unhandled Routes
fastify.get("/*", async (request, reply) =>
  reply.status(404).send({ message: "Route not found" })
);

//Start Server
fastify.listen(PORT, () => logSuccess("Listening to PORT:", PORT));
