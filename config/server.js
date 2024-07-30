module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS", ["myKeyA", "myKeyB"]),
  },

  nodeOptions: env("NODE_OPTIONS", "--max-old-space-size=2048"),
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
