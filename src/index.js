import "./styles.css";
import { default as $ } from "jquery";

function data(data) {
  $("header").attr("background-image", data.urls.regular);
}

// $(function() {
//   //var randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   var randomColor = Math.floor(Math.random() * 8388607 + 4194303).toString(16);

//   $("footer").css({
//     backgroundColor: "#" + randomColor
//   });
//   $("header").css({
//     backgroundColor: "#" + randomColor
//   });
// });
