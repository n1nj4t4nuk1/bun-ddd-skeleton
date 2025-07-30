import { Command } from "./Command";
import type { CommandResponse } from "./CommandResponse";

export interface CommandBus {
  dispatch(command: Command): Promise<CommandResponse>;
}
