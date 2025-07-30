import { EventEmitter } from "events";
import { injectable } from "tsyringe";
import type { DomainEvent } from "../../domain/DomainEvent";
import type { EventBus } from "../../domain/EventBus";
import type { DomainEventSubscriber } from "../../domain/DomainEventSubscriber";

@injectable()
export class InMemoryAsyncEventBus extends EventEmitter implements EventBus {
  async publish(events: DomainEvent[]): Promise<void> {
    events.map((event) => this.emit(event.eventName, event));
  }

  addSubscribers(subscribers: Array<DomainEventSubscriber<any>>): void {
    subscribers.forEach((subscriber) => {
      subscriber.subscribedTo().forEach((event) => {
        this.on(event.EVENT_NAME, subscriber.on.bind(subscriber));
      });
    });
  }
}
