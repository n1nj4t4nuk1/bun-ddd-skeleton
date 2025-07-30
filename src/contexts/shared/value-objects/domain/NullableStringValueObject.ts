import { ValueObject } from "./ValueObject";

export abstract class NullableStringValueObject extends ValueObject<
  string | null
> {
  constructor(value: string | null) {
    super(value);
  }
}
