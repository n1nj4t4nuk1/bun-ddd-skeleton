import { InvalidArgumentError } from "./InvalidArgumentError";
import { ValueObject } from "./ValueObject";

export abstract class DateValueObject extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.ensureIsValidDate(value);
  }

  private ensureIsValidDate(date: string): void {
    try {
      new Date(date);
    } catch {
      throw new InvalidArgumentError(
        `<${this.constructor.name}> does not allow the value <${date}>`,
      );
    }
  }
}
