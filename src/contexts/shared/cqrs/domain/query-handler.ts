import type { Query } from "./query";
import type { QueryHandlerResponse } from "./query-handler-response";

interface QueryHandler {
    
    ask(query: Query): Promise<QueryHandlerResponse>;

    get type(): string;

}

export type { QueryHandler };