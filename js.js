let p1,
  p2,
  p3,
  w = "",
  licznik = 0,
  hide;

function reset() {
  document.getElementById("p1_1").checked = false;
  document.getElementById("p1_2").checked = false;
  document.getElementById("p1_3").checked = false;
  document.getElementById("p2_1").checked = false;
  document.getElementById("p2_2").checked = false;
  document.getElementById("p2_3").checked = false;
  document.getElementById("p3_1").checked = false;
  document.getElementById("p3_2").checked = false;
  document.getElementById("p3_3").checked = false;
  w = "";
  licznik++;
}

function obniz() {
  hide = document.getElementById("stopka");
  hide.style.marginTop = "95px";
}

function obniz1() {
  hide = document.getElementById("stopka");
  hide.style.marginTop = "135px";
}

function pobierz() {
  if (document.getElementById("p1_1").checked == true) {
    p1 = "1";
  } else if (document.getElementById("p1_2").checked == true) {
    p1 = "2";
  } else if (document.getElementById("p1_3").checked == true) {
    p1 = "3";
  }
  if (document.getElementById("p2_1").checked == true) {
    p2 = "1";
  } else if (document.getElementById("p2_2").checked == true) {
    p2 = "2";
  } else if (document.getElementById("p2_3").checked == true) {
    p2 = "3";
  }
  if (document.getElementById("p3_1").checked == true) {
    p3 = "1";
  } else if (document.getElementById("p3_2").checked == true) {
    p3 = "2";
  } else if (document.getElementById("p3_3").checked == true) {
    p3 = "3";
  }
  sprawdz();
}

function sprawdz() {
  if (p1 == "2") {
    w += `<br> <br> Próba nr. ${licznik} <br> Pytanie pierwsze odpowiedziano prawidłowo! <br>`;
  } else {
    w += `<br> Próba nr. ${licznik} <br> <font color="red"> <br>Pytanie pierwsze odpowiedziano nieprawidłowo!</font> <br> Prawidłowa odpowiedź to: B. 1985 <br>`;
  }
  if (p2 == "1") {
    w += `Pytanie drugie odpowiedziano prawidłowo! <br>`;
  } else {
    w += `<font color="red">Pytanie drugie odpowiedziano nieprawidłowo!</font> <br> Prawidłowa odpowiedź to: A. Tim Berners-Lee <br>`;
  }
  if (p3 == "3") {
    w += `Pytanie trzecie odpowiedziano prawidłowo! <br>`;
  } else {
    w += `<font color="red">Pytanie trzecie odpowiedziano nieprawidłowo!</font> <br> Prawidłowa odpowiedź to: C. Steve Jobs <br>`;
  }
  document.getElementById("end").innerHTML += `${w}`;
}
