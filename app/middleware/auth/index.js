const verifyAccessToken = require('./verifyAccessToken');
const setCurrentUser = require('./setCurrentUser');

const protectRoute = [verifyAccessToken, setCurrentUser];

module.exports = { protectRoute, verifyAccessToken, setCurrentUser };
