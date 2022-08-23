const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        DB_USER: 'admin',
        DB_PASSWORD: "zf4BlAgPzOkQKYREwxZj9gA5"

      }
    }
  }

  return {
    env: {
      DB_USER: 'admin',
      DB_PASSWORD: "zf4BlAgPzOkQKYREwxZj9gA5"

    }
  }

}
