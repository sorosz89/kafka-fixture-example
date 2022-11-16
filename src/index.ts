import { ConsumerConfig, Kafka } from "kafkajs";
import { createCustomConsumer } from "./custom-consumer";
import { AuditConsumer, Handler, SourceConsumer } from "./types";

/**
 * Kafka Fixture with extended capabilities for testing purposes.
 * 
 */
export class KafkaFixture extends Kafka {

    /**
     * Creates custom fixture consumer by extendig it with addidional behaviour.
     * 
     */
    fixtureConsumer(config: ConsumerConfig, customProperty: Handler): SourceConsumer | AuditConsumer {
        return createCustomConsumer(this.consumer(config), customProperty)
    }
}
