const PRODUCTION = require('./prod');
const DEVELOPMENT = require('./dev');
const QA = require('./qa');

const { NODE_ENV } = process.env;

const env = DEVELOPMENT;

if(NODE_ENV === 'PRODUCTION') env = PRODUCTION;

if(NODE_ENV === 'QA') env = QA

module.exports = env;

