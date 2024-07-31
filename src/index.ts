import ShareButtonTwitter from "./shareButtonTwitter";
import ShareButtonFacebook from "./shareButtonFacebook";
import ShareButtonLinkedin from "./shareButtonLinkedin";
import ShareButtonPrint from "./shareButtonPrint";
import AbstractShareButton from "./abstractShareButton";
import MockventHandler from "./mockEventhandler";

const eventHandler = new MockventHandler();

const twitter: AbstractShareButton = new ShareButtonTwitter(eventHandler, ".btn-twitter", "http://www.youtube.com/rodrigobranas");
twitter.bind();
const facebook: AbstractShareButton = new ShareButtonFacebook(eventHandler, ".btn-facebook", "http://www.youtube.com/rodrigobranas");
facebook.bind();
const linkedin: AbstractShareButton = new ShareButtonLinkedin(eventHandler, ".btn-linkedin", "http://www.youtube.com/rodrigobranas");
linkedin.bind();
const print: AbstractShareButton = new ShareButtonPrint(eventHandler ,".btn-print");
print.bind();