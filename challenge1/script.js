const output = document.getElementById("output");
const regex = /^([1-9]\d*)$/;

function fizzBuzz() {
  while (output.firstChild) {
    output.removeChild(output.firstChild);
  }
  var fizz = Number(document.getElementById("fizz").value);
  var buzz = Number(document.getElementById("buzz").value);
  var num1 = regex.test(fizz);
  var num2 = regex.test(buzz);
  if (num1 && num2) {
    for (i = 1; i <= 100; i++) {
      if (i % fizz == 0 && i % buzz == 0) {
        var p = document.createElement("p");
        p.innerHTML = "FizzBuzz " + i;
        output.appendChild(p);
      } else if (i % fizz == 0) {
        var p = document.createElement("p");
        p.innerHTML = "Fizz " + i;
        output.appendChild(p);
      } else if (i % buzz == 0) {
        var p = document.createElement("p");
        p.innerHTML = "Buzz " + i;
        output.appendChild(p);
      };
    };
  } else {
    var p = document.createElement("p");
    p.innerHTML = "整数値を入力してください。";
    output.appendChild(p);
  };
}
