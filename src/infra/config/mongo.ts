export default () => ({
  port: Number(process.env.MONGODB_PORT || 27017),
  host: String(process.env.MONGODB_HOST || "127.0.0.1"),
  database: String(process.env.MONGODB_DB || "blog"),
  username: String(process.env.MONGODB_USER || "root"),
  password: String(process.env.MONGODB_PASS || "codigo"),
});
