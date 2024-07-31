import EventHandler from "./eventHendler";
import AbstractLinkShareButton from "./abstractLinkShareButton";

export default class ShareButtonFacebook extends AbstractLinkShareButton {

    constructor(eventHandler: EventHandler, clazz: string, url: string ) {
        super(eventHandler, clazz, url );

    }

    createLink(): string {
        return `http://www.facebook.com/share.php>u=${this.url}`;
    }
}