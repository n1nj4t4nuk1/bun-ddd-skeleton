import { DomainEvent } from "./DomainEvent";

export interface DomainEventSubscriber<T extends DomainEvent> {
  subscribedTo(): Array<T>;
  on(domainEvent: T): Promise<void>;
}
