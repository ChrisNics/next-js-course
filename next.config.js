const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  console.log(phase);
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "smeb",
        mongodb_password: "2CRCby5iDkjjkFbs",
        mongodb_clustername: "nextjscourse",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "smeb",
      mongodb_password: "2CRCby5iDkjjkFbs",
      mongodb_clustername: "nextjscourse",
      mongodb_database: "my-site",
    },
  };
};
