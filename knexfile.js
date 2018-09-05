module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/rooms'
  }, production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
};
