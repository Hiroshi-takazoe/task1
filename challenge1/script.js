const output = document.getElementById("output");
const regex = /^([1-9]\d*)$/;

function fizzBuzz() {
  while (output.firstChild) {
    output.removeChild(output.firstChild);
  }
  let fizzNumber = Number(document.getElementById("fizz").value);
  let buzzNumber = Number(document.getElementById("buzz").value);
  let isFizzNumber = regex.test(fizzNumber);
  let isBuzzNumber = regex.test(buzzNumber);
  if (isFizzNumber && isBuzzNumber) {
    for (i = 1; i <= 100; i++) {
      if (i % fizzNumber == 0 && i % buzzNumber == 0) {
        let p = document.createElement("p");
        p.innerHTML = "FizzBuzz " + i;
        output.appendChild(p);
      } else if (i % fizzNumber == 0) {
        let p = document.createElement("p");
        p.innerHTML = "Fizz " + i;
        output.appendChild(p);
      } else if (i % buzzNumber == 0) {
        let p = document.createElement("p");
        p.innerHTML = "Buzz " + i;
        output.appendChild(p);
      };
    };
  } else {
    let p = document.createElement("p");
    p.innerHTML = "整数値を入力してください。";
    output.appendChild(p);
  };
}
