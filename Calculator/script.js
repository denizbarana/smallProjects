//console.log("Selam");

//window.alert("Alarm");

//document.getElementById("h1").textContent = "Selam";

//let yas = 18;
//let fiyat = 18.99;
//let ort = 75.00;

//console.log("Yaşınız: " + yas); // "Yaşınız: 18"
//console.log("Fiyat: " + fiyat); // "Fiyat: 18.99"
//console.log("Ortalama: " + ort);

//document.getElementById("btn1").onClick = function (){
//
//
//
//
//
//}

var firstNumberText = "",
  firstNumber = 0,
  secondNumberText = "",
  secondNumber = 0,
  total = 0,
  islem,
  sonuc = 0;

document.getElementById("btn1").onclick = function () {
  if (firstNumber > 0) {
    secondNumberText = secondNumberText + "1";
    console.log(secondNumberText);
    document.getElementById("theText").textContent = secondNumberText;
  } else {
    firstNumberText = firstNumberText + "1";
    console.log(firstNumberText);
    document.getElementById("theText").textContent = firstNumberText;
  }
};
document.getElementById("btn2").onclick = function () {
  if (firstNumber > 0) {
    secondNumberText = secondNumberText + "2";
    console.log(secondNumberText);
    document.getElementById("theText").textContent = secondNumberText;
  } else {
    firstNumberText = firstNumberText + "2";
    console.log(firstNumberText);
    document.getElementById("theText").textContent = firstNumberText;
  }
};

document.getElementById("btn3").onclick = function () {
  if (firstNumber > 0) {
    secondNumberText = secondNumberText + "3";
    console.log(secondNumberText);
    document.getElementById("theText").textContent = secondNumberText;
  } else {
    firstNumberText = firstNumberText + "3";
    console.log(firstNumberText);
    document.getElementById("theText").textContent = firstNumberText;
  }
};

document.getElementById("btn4").onclick = function () {
  if (firstNumber > 0) {
    secondNumberText = secondNumberText + "4";
    console.log(secondNumberText);
    document.getElementById("theText").textContent = secondNumberText;
  } else {
    firstNumberText = firstNumberText + "4";
    console.log(firstNumberText);
    document.getElementById("theText").textContent = firstNumberText;
  }
};

document.getElementById("btn5").onclick = function () {
  if (firstNumber > 0) {
    secondNumberText = secondNumberText + "5";
    console.log(secondNumberText);
    document.getElementById("theText").textContent = secondNumberText;
  } else {
    firstNumberText = firstNumberText + "5";
    console.log(firstNumberText);
    document.getElementById("theText").textContent = firstNumberText;
  }
};

document.getElementById("btn6").onclick = function () {
  if (firstNumber > 0) {
    secondNumberText = secondNumberText + "6";
    console.log(secondNumberText);
    document.getElementById("theText").textContent = secondNumberText;
  } else {
    firstNumberText = firstNumberText + "6";
    console.log(firstNumberText);
    document.getElementById("theText").textContent = firstNumberText;
  }
};
document.getElementById("btn7").onclick = function () {
  if (firstNumber > 0) {
    secondNumberText = secondNumberText + "7";
    console.log(secondNumberText);
    document.getElementById("theText").textContent = secondNumberText;
  } else {
    firstNumberText = firstNumberText + "7";
    console.log(firstNumberText);
    document.getElementById("theText").textContent = firstNumberText;
  }
};

document.getElementById("btn8").onclick = function () {
  if (firstNumber > 0) {
    secondNumberText = secondNumberText + "8";
    console.log(secondNumberText);
    document.getElementById("theText").textContent = secondNumberText;
  } else {
    firstNumberText = firstNumberText + "8";
    console.log(firstNumberText);
    document.getElementById("theText").textContent = firstNumberText;
  }
};

document.getElementById("btn9").onclick = function () {
  if (firstNumber > 0) {
    secondNumberText = secondNumberText + "9";
    console.log(secondNumberText);
    document.getElementById("theText").textContent = secondNumberText;
  } else {
    firstNumberText = firstNumberText + "9";
    console.log(firstNumberText);
    document.getElementById("theText").textContent = firstNumberText;
  }
};
document.getElementById("btn.").onclick = function () {
  if (firstNumber > 0) {
    secondNumberText = secondNumberText + ".";
    console.log(secondNumberText);
    document.getElementById("theText").textContent = secondNumberText;
  } else {
    firstNumberText = firstNumberText + ".";
    console.log(firstNumberText);
    document.getElementById("theText").textContent = firstNumberText;
  }
};

document.getElementById("btn+").onclick = function () {
  document.getElementById("theText").textContent = "0";
  document.getElementById("theBText").textContent = firstNumberText;
  document.getElementById("theEqautaion").textContent = "+";
  firstNumber = parseInt(firstNumberText);
  console.log(firstNumber, secondNumber);
};
document.getElementById("btnO").onclick = function () {
  firstNumberText = firstNumberText + "00";
  ("");
  document.getElementById("theText").textContent = firstNumberText;
};

document.getElementById("btn0").onclick = function () {
  firstNumberText = firstNumberText + "0";
  ("");
  document.getElementById("theText").textContent = firstNumberText;
};

document.getElementById("btn-").onclick = function () {
  document.getElementById("theText").textContent = "0";
  document.getElementById("theBText").textContent = firstNumberText;
  document.getElementById("theEqautaion").textContent = "-";
  firstNumber = parseInt(firstNumberText);
  console.log(firstNumber, secondNumber);
};
document.getElementById("btnX").onclick = function () {
  document.getElementById("theText").textContent = "0";
  document.getElementById("theBText").textContent = firstNumberText;
  document.getElementById("theEqautaion").textContent = "x";
  firstNumber = parseInt(firstNumberText);
  console.log(firstNumber, secondNumber);
};
document.getElementById("btnC").onclick = function () {
  firstNumberText = "0";
  secondNumberText = "0";
  firstNumber = 0;
  secondNumber = 0;
  sonuc = 0;
  document.getElementById("theText").textContent = "0";
  document.getElementById("theBText").textContent = "";
  document.getElementById("theConclusion").textContent = "";
  document.getElementById("theEqautaion").textContent = "";
  console.log(firstNumber, secondNumber);
};
document.getElementById("btn/").onclick = function () {
  document.getElementById("theText").textContent = "0";
  document.getElementById("theBText").textContent = firstNumberText;
  document.getElementById("theEqautaion").textContent = "/";
  firstNumber = parseInt(firstNumberText);
  console.log(firstNumber, secondNumber);
};

document.getElementById("btn=").onclick = function () {
  firstNumber = parseFloat(firstNumberText);
  secondNumber = parseFloat(secondNumberText);
  console.log(firstNumber, secondNumber);
  islem = document.getElementById("theEqautaion").textContent;
  console.log(islem);
  if (islem == "+") {
    sonuc = firstNumber + secondNumber;
    console.log(sonuc);
    document.getElementById("theConclusion").textContent = sonuc;
  }
  if (islem == "-") {
    sonuc = firstNumber - secondNumber;
    console.log(sonuc);
    document.getElementById("theConclusion").textContent = sonuc;
  }
  if (islem == "x") {
    sonuc = firstNumber * secondNumber;
    console.log(sonuc);
    document.getElementById("theConclusion").textContent = sonuc;
  }
  if (islem == "/") {
    sonuc = firstNumber / secondNumber;
    console.log(sonuc);
    document.getElementById("theConclusion").textContent = sonuc;
  }
  console.log(sonuc);
};
