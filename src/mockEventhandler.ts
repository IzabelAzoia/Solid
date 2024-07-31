import EventHandler from "./eventHendler";

export default class MockventHandler implements EventHandler {
    addEventListenerToClass(clazz: string, event: string, fn: any) {
        console.log(clazz, event, fn);
    }
}