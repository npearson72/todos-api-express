const verifyAccessToken = require('./verifyAccessToken');
const setCurrentUserId = require('./setCurrentUserId');

module.exports = { protectRoute: [verifyAccessToken, setCurrentUserId] };
