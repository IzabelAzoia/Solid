import EventHandler from "./eventHendler";
import AbstractShareButton from "./abstractShareButton";

export default class ShareButtonPrint extends AbstractShareButton {

    constructor(eventHandler: EventHandler, clazz: string) {
        super(eventHandler, clazz);
    }

    createAction() {
        return () => window.print
    }
}