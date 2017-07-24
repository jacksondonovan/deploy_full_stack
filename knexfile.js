// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: '127.0.0.1',
      database: 'firstnames'
    }
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }
}
