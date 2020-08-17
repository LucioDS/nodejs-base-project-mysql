// queries
import { findQuery, QueryResult } from './query';

const QUERY_FIND_RIGHT_BY_NAME = (right: string): string => `${right}`;

export const findRouteRight = async (rightName: string): Promise<QueryResult> =>
    findQuery(QUERY_FIND_RIGHT_BY_NAME(rightName));