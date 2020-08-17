// dependencies
import dotenv from 'dotenv';

dotenv.config();

export const config = {
	RUNNING_PORT: process.env.RUNNING_PORT,
	DB_HOSTNAME: process.env.DB_HOSTNAME,
	DB_USERNAME: process.env.DB_USERNAME,
	DB_PASSWORD: process.env.DB_PASSWORD,
	DB_NAME: process.env.DB_NAME,
	DB_PORT: process.env.DB_PORT,
};
