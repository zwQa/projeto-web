import { MDCTopAppBar } from "@material/top-app-bar";

const topAppBarElement = document.querySelector( '.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));