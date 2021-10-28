const fastify = require("fastify").default({
  logger: true,
});
const mongoose = require("mongoose");
const {
  logSuccess,
  logError,
  logWarning,
  logInfo,
} = require("./utils/console");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const url = `mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_PASSWORD}@playground-cluster.liar9.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;

//Initialize DB connection
mongoose
  .connect(url)
  .then(() => logSuccess("Connected to Database:", process.env.DATABASE_NAME))
  .catch((err) =>
    logError("Connecting to Database:", process.env.DATABASE_NAME, err)
  );

fastify.get("/", async (request, reply) => {
  return { message: "Fastify loaded" };
});

//Start Server
fastify.listen(PORT, () => logSuccess("Listening to PORT:", PORT));
