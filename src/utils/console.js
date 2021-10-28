//Custom Console logs
const logSuccess = (message, ...rest) =>
  console.log("\u001b[1;32m[SUCCESS]: " + message + "\u001b[0;32m " + rest);

const logError = (message, ...rest) =>
  console.log("\u001b[1;31m[ERROR]: " + message + "\u001b[0;31m " + rest);

const logWarning = (message, ...rest) =>
  console.log("\u001b[1;33m[WARNING]: " + message + "\u001b[0;33m " + rest);

const logInfo = (message, ...rest) =>
  console.log("\u001b[1;36m[INFO]: " + message + "\u001b[0;36m " + rest);

module.exports = {
  logSuccess,
  logError,
  logWarning,
  logInfo,
};

/*---- Text ----*/
// console.log("\u001b[1;31m Red message");
// console.log("\u001b[1;32m Green message");
// console.log("\u001b[1;33m Yellow message");
// console.log("\u001b[1;34m Blue message");
// console.log("\u001b[1;35m Purple message");
// console.log("\u001b[1;36m Cyan message");

/*---- Background ----*/
// console.log("\u001b[1;41m Red background");
// console.log("\u001b[1;42m Green background");
// console.log("\u001b[1;43m Yellow background");
// console.log("\u001b[1;44m Blue background");
// console.log("\u001b[1;45m Purple background");
// console.log("\u001b[1;46m Cyan background");
