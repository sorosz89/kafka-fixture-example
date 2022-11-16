import { KafkaFixture } from "..";

const kafka = new KafkaFixture({
    clientId: 'my-app',
    brokers: ['kafka1:9092', 'kafka2:9092'],
})

export { kafka }