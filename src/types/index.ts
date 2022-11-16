import { Consumer, ConsumerConfig, Kafka } from "kafkajs"

export type Handler = { waitForMessage: () => Promise<void> } | { waitForAuditMessage: () => Promise<void> }

export type AuditConsumer = Consumer & {
    waitForAuditMessage: () => Promise<void>
}

export type SourceConsumer = Consumer & {
    waitForMessage: () => Promise<void>
}

export type KafkaFixture = Kafka & {
    customConsumer: (config: ConsumerConfig, customProperty: Handler) => SourceConsumer | AuditConsumer,
}