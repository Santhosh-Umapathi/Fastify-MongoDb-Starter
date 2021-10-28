const logSuccess = (message, ...rest) =>
  console.log("\u001b[" + 32 + "m" + message + rest + "\u001b[0m");

const logError = (message, ...rest) =>
  console.log("\u001b[" + 31 + "m" + message + rest + "\u001b[0m");

const logWarning = (message, ...rest) =>
  console.log("\u001b[" + 33 + "m" + message + rest + "\u001b[0m");

module.exports = {
  logSuccess,
  logError,
  logWarning,
};
