// dependencies
import { createConnection } from 'mysql2';

// env variables for database configuration
import config from '../../config';

const db = createConnection({
	host: config.DB_HOSTNAME,
	user: config.DB_USERNAME,
	password: config.DB_PASSWORD,
	database: config.DB_NAME,
	port: Number(config.DB_PORT),
});

// expose a global connection
export default db;
