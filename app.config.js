import 'dotenv/config'


module.exports = {
  name: 'MyApp',
  version: '1.0.0',
  extra: {
    FAV_QUOTES_API_KEY: process.env.FAV_QUOTES_API_KEY,
  },
};