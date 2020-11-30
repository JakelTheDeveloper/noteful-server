module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_TOKEN: process.env.API_TOKEN || 'start-api-token',
  DB_URL: process.env.DB_URL || 'postgresql://jakel:hello@localhost/noteful_dbase',
}