import type { Command } from "../../../../cqrs/domain/command/Command";
import type { CommandBus } from "../../../../cqrs/domain/command/CommandBus";
import type { CommandHandler } from "../../../../cqrs/domain/command/CommandHandler";
import type { CommandResponse } from "../../../../cqrs/domain/command/CommandResponse";

export class InMemoryCommandBus implements CommandBus {
  private commandHandlers: Map<Command, CommandHandler<any>>;

  constructor(commandHandlers: Array<CommandHandler<any>>) {
    this.commandHandlers = new Map();
    for (const handler of commandHandlers) {
      if (this.commandHandlers.has(handler.subscribedTo())) {
        throw new Error(
          `Command handler for ${handler.subscribedTo()} already exists.`,
        );
      }
      this.commandHandlers.set(handler.subscribedTo(), handler);
    }
  }

  async dispatch(command: Command): Promise<CommandResponse> {
    const handler = this.commandHandlers.get(typeof command)!;
    return await handler.handle(command);
  }
}
