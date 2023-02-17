export default (): any => ({
  database: {
    connection: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306,
    username: process.env.DB_USERNAME || 'todo',
    password: process.env.DB_PASSWORD || 'todo',
    database: process.env.DB_DATABASE || 'todo',
  },
});

