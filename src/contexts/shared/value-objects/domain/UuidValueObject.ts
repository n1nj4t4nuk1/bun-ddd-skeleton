import { v4 as uuid } from "uuid";
import validate from "uuid-validate";
import { InvalidArgumentError } from "./InvalidArgumentError";
import { ValueObject } from "./ValueObject";

export class UuidValueObject extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.ensureIsValidUuid(value);
  }

  static random(): UuidValueObject {
    return new UuidValueObject(uuid());
  }

  override toValue(): string {
    return this.value;
  }

  private ensureIsValidUuid(id: string): void {
    if (!validate(id)) {
      throw new InvalidArgumentError(
        `<${this.constructor.name}> does not allow the value <${id}>`,
      );
    }
  }
}
