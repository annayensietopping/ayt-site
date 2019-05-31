import "./styles.css";
import { default as $ } from "jquery";

// inspo
// http://seanhalpin.io/

// add click event to hire me that reveals email address in addition to sendto link

$(document).ready(function() {
  $("#footer-hover").click(function() {
    $("#footer-reveal").slideToggle(300);
  });
});

// random img generator NYC
$.get(
  "https://api.unsplash.com/photos/random?client_id=e28892e82256b02ca943a7a7bdb463bfdd5f059fd53ba7b67ea815fcde037557&query=nyc"
).then(res => {
  console.log(res);
  data(res);
});

function data(data) {
  $("header #mast-head").attr("src", data.urls.regular);
}
