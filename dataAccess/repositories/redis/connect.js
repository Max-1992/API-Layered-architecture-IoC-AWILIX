const redisConfig = require('./config')
const Redis = require("ioredis");

const redis = new Redis(redisConfig);

module.exports = redis;

