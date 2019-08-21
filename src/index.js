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

function generate() {
  var hexValues = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e"
  ];

  function populate(a) {
    for (var i = 0; i < 6; i++) {
      var x = Math.round(Math.random() * 14);
      var y = hexValues[x];
      a += y;
    }
    return a;
  }

  var newColor1 = populate("#");
  var newColor2 = populate("#");
  var angle = Math.round(Math.random() * 360);

  var gradient =
    "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";

  document.getElementById("container").style.background = gradient;
}

document.onload = generate;
