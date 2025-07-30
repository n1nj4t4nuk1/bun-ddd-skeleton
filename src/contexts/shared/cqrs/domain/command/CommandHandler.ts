import { Command } from "./Command";
import type { CommandResponse } from "./CommandResponse";

export interface CommandHandler<T extends Command> {
  subscribedTo(): Command;
  handle(command: T): Promise<CommandResponse>;
}
