import { Type } from "@angular/core";

type SubscriptionFn = (data: any) => void;

interface ISubscriptions {
     [eventName: string]: SubscriptionFn[];
}

class MyEventEmitter {
    subscriptions: ISubscriptions = {};


    subscribe(eventName: string, callBack: SubscriptionFn) {
        this.subscriptions[eventName] = 
        (this.subscriptions[eventName] || []).concat(callBack);
    }

    emit(eventName: string, data: any) {
        (this.subscriptions[eventName] || []).forEach(callBack => callBack(data)); 
    }
}

const eventEmitter = new MyEventEmitter();
eventEmitter.subscribe('connected', (data) => console.log(data, 'connected !'));
eventEmitter.subscribe('connected', (data) => console.log(data, 'connected 2 !'));

setTimeout(() =>{
    eventEmitter.emit('connected',  {a: 'a', b: 'b'});
}, 5000);