import { UuidValueObject } from "../../value-objects/domain/UuidValueObject";

export abstract class DomainEvent {
  static EVENT_NAME: string;

  readonly aggregateId: string;
  readonly eventId: string;
  readonly occurredOn: Date;
  readonly eventName: string;

  constructor(
    eventName: string,
    aggregateId: string,
    eventId?: string,
    occurredOn?: Date,
  ) {
    this.aggregateId = aggregateId;
    this.eventId = eventId || UuidValueObject.random().value;
    this.occurredOn = occurredOn || new Date();
    this.eventName = eventName;
  }

  abstract toPrimitives(): DomainEventAttributes;
}

export type DomainEventClass = {
  EVENT_NAME: string;
  fromPrimitives(params: {
    aggregateId: string;
    eventId: string;
    occurredOn: Date;
    attributes: DomainEventAttributes;
  }): DomainEvent;
};

type DomainEventAttributes = any;
