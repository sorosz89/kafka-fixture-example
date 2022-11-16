import { Consumer } from "kafkajs";
import { Handler, SourceConsumer, AuditConsumer } from "./types";

export const createCustomConsumer = (consumer: Consumer, handler: Handler): SourceConsumer | AuditConsumer => {
    return { ...consumer, ...handler }
}
