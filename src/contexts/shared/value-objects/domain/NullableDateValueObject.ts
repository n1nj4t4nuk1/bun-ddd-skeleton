import { InvalidArgumentError } from "./InvalidArgumentError";
import { ValueObject } from "./ValueObject";

export abstract class NullableDateValueObject extends ValueObject<
  string | null
> {
  constructor(value: string | null) {
    super(value);
    this.ensureIsValidDate(value);
  }

  private ensureIsValidDate(date: string | null): void {
    if (date === null) return;

    try {
      new Date(date);
    } catch {
      throw new InvalidArgumentError(
        `<${this.constructor.name}> does not allow the value <${date}>`,
      );
    }
  }
}
