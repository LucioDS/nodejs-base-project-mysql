//dependencies
import { Query, QueryError, RowDataPacket, OkPacket, ResultSetHeader } from 'mysql2';

//db
import db from '../connection';

export type QueryData = RowDataPacket[] | RowDataPacket[][] | OkPacket | OkPacket[] | ResultSetHeader

export type QueryResult = Promise<null | QueryError | QueryData>

export const findQuery = (queryString: string): QueryResult =>
    new Promise((resolve, reject) => {
        db.query(queryString, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });

export const createQuery = (queryString: string, values: unknown): QueryResult =>
    new Promise((resolve, reject) => {
        db.query(queryString, values, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });