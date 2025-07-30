import { ValueObject } from "./ValueObject";

export abstract class NumberValueObject extends ValueObject<number> {
  isBiggerThan(other: NumberValueObject): boolean {
    return this.value > other.value;
  }

  isBiggerOrEqualThan(other: NumberValueObject): boolean {
    return this.value >= other.value;
  }

  isLessThan(other: NumberValueObject): boolean {
    return this.value < other.value;
  }

  isLessOrEqualThan(other: NumberValueObject): boolean {
    return this.value <= other.value;
  }
}
