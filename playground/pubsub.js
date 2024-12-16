/**
 * 实现发布订阅机制
 * 1. 订阅：订阅者向事件调度中心注册自己感兴趣的事件，并提供一个处理该事件的回调函数
 * 2. 发布：当发布者发布(触发)某个事件时，它只需要通知事件调度中心
 * 3. 通知订阅者：事件调度中心会将事件广播给所有订阅了该事件的订阅者，并调用他们的回调函数来处理事件。
 */

class PubSub {
    constructor() {
        // TODO
    }

    subscribe() {
        // TODO
    }

    publish() {
        // TODO
    }

    unsubscribe() {
        // TODO
    }
}

const pubsub = new PubSub();

function logData(data) {
    console.log(`Received data: ${data}`);
}

// 订阅事件
pubsub.subscribe('dataEvent', logData);

// 发布事件
pubsub.publish('dataEvent', 'Hello, World!');

pubsub.unsubscribe('dataEvent', logData);

pubsub.publish('dataEvent', 'Hello, World!');