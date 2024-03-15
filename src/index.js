import "./styles.css";
import { default as $ } from "jquery";
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '3447aaf4-25bf-46dd-ad1b-a6ff5fdf6539',
    clientToken: 'pubfdcc9076a94b8b8da019e14c079cad6f',
    site: 'datadoghq.com',
    service: 'annas-site',
    env: 'prod',
    // Specify a version number to identify the deployed version of your application in Datadog
    // version: '1.0.0', 
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input',
});

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
