// consoleText(["Hello World.", "Console Text", "Made with Love."], "text", [
//   "tomato",
//   "rebeccapurple",
//   "lightblue",
// ]);

export default function consoleText(words, spanRef, colors, underscoreRef) {
  if (spanRef && underscoreRef) {
    if (colors === undefined) colors = ["#fff"];
    var visible = true;
    //   var con = document.getElementById("console");
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    //   var target = document.getElementById(id);
    spanRef.current.setAttribute("style", "color:" + colors[0]);
    window.setInterval(function () {
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        spanRef.current.innerHTML = words[0].substring(0, letterCount);
        window.setTimeout(function () {
          var usedColor = colors.shift();
          colors.push(usedColor);
          var usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          spanRef.current.setAttribute("style", "color:" + colors[0]);
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function () {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (waiting === false) {
        spanRef.current.innerHTML = words[0].substring(0, letterCount);
        letterCount += x;
      }
    }, 120);
    window.setInterval(function () {
      if (visible === true) {
        underscoreRef.current.className = "console-underscore hide";
        visible = false;
      } else {
        underscoreRef.current.className = "console-underscore";

        visible = true;
      }
    }, 400);
  }
}
