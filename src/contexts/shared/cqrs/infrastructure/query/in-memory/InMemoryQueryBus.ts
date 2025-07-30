import type { Query } from "../../../../cqrs/domain/query/Query";
import type { QueryBus } from "../../../../cqrs/domain/query/QueryBus";
import type { QueryHandler } from "../../../../cqrs/domain/query/QueryHandler";

export class InMemoryQueryBus implements QueryBus {
  private queryHandlersInformation: Map<Query, QueryHandler<any, any>>;

  constructor(queryHandlersInformation: Array<QueryHandler<any, any>>) {
    this.queryHandlersInformation = new Map();

    for (const handler of queryHandlersInformation) {
      if (this.queryHandlersInformation.has(handler.subscribedTo())) {
        throw new Error(
          `Query handler for ${handler.subscribedTo()} already exists.`,
        );
      }
      this.queryHandlersInformation.set(handler.subscribedTo(), handler);
    }
  }

  async ask<R extends Response>(query: Query): Promise<R> {
    const handler = this.queryHandlersInformation.get(query)!;
    return (await handler.handle(query)) as Promise<R>;
  }
}
