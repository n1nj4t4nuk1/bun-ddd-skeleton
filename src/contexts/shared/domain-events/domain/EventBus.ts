import { DomainEvent } from "./DomainEvent";
import type { DomainEventSubscriber } from "./DomainEventSubscriber";

export interface EventBus {
  publish(events: Array<DomainEvent>): Promise<void>;
  addSubscribers(subscribers: Array<DomainEventSubscriber<any>>): void;
}
