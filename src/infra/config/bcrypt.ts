export default () => ({
  salts: Number(process.env.BCRYPT_SALTS || 10),
});
