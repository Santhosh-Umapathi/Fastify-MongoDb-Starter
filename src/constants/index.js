const PORT = process.env.PORT || 5000;

const MONGO_DB_URL = `mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_PASSWORD}@playground-cluster.liar9.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;

const URL_PREFIX = "/api";

module.exports = {
  PORT,
  MONGO_DB_URL,
  URL_PREFIX,
};
