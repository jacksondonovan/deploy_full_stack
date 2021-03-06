const config = require('../knexfile')

const env = process.env.NODE_ENV || 'development'

const db = require('knex')(config[env])

module.exports = db;
