import AbstractShareButton from "./abstractShareButton";
import EventHandler from "./eventHendler";

export default abstract class AbstractLinkShareButton extends AbstractShareButton {
    url: string;

    constructor(eventHedler: EventHandler, clazz: string, url: string) {
        super(eventHedler, clazz);
        this.url = url;
    }

    abstract createLink(): string;

    createAction(): any {
        const link = this.createLink();
        return () => window.open(link)
    }
}