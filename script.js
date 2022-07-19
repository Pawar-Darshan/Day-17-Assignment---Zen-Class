setTimeout(function () { document.getElementById("countdown").innerHTML = '10 seconds' }, 1000);
setTimeout(function () { document.getElementById("countdown").innerHTML = '9 seconds' }, 2000);
setTimeout(function () { document.getElementById("countdown").innerHTML = '8 seconds' }, 3000);
setTimeout(function () { document.getElementById("countdown").innerHTML = '7 seconds' }, 4000);
setTimeout(function () { document.getElementById("countdown").innerHTML = '6 seconds' }, 5000);
setTimeout(function () { document.getElementById("countdown").innerHTML = '5 seconds' }, 6000);
setTimeout(function () { document.getElementById("countdown").innerHTML = '4 seconds' }, 7000);
setTimeout(function () { document.getElementById("countdown").innerHTML = '3 seconds' }, 8000);
setTimeout(function () { document.getElementById("countdown").innerHTML = '2 seconds' }, 9000);
setTimeout(function () { document.getElementById("countdown").innerHTML = '1 seconds' }, 10000);
setTimeout(function () { document.getElementById("countdown").innerHTML = '<h1>🥳🥳Happy Independence Day🥳🥳</h1>' }, 11000);

/*Same function with recursive method with the help of setTimeout:
let divEle = document.createElement("div");
divEle.id = "status";
document.body.appendChild(divEle);

function countDown(secs, elem) {
  var element = document.getElementById(elem);
  element.innerHTML = `Lets count with me... ${secs} seconds`;
  if (secs < 1) {
    clearTimeout(timer);
    element.innerHTML = `<h1>🥳🥳Happy Independence Day🥳🥳</h1>`;
  }
  secs--;

  var timer = setTimeout("countDown(" + secs + ',"' + elem + '")', 1000);
}

countDown(10, "status");
*/
