const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "aws-0-eu-central-1.pooler.supabase.com"),
      port: env.int("DATABASE_PORT", 6543),
      database: env("DATABASE_NAME", "postgres"),
      user: env("DATABASE_USER", "postgres.hqvjskjaxswncsfkxhdw"),
      password: env("DATABASE_PASSWORD", "aslancimbom41"),
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
      },
      idleTimeoutMillis: 300000, // 30 seconds
    },
    useNullAsDefault: true,
  },
});
