const llaves = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

function encriptar(str) {
  let strLowercase = str.toLowerCase();
  let strArr = [...strLowercase];
  let strEncriptado = "";

  strArr.forEach((character) => {
    switch (character) {
      case "a":
        strEncriptado += llaves["a"];
        break;
      case "e":
        strEncriptado += llaves["e"];
        break;
      case "i":
        strEncriptado += llaves["i"];
        break;
      case "o":
        strEncriptado += llaves["o"];
        break;
      case "u":
        strEncriptado += llaves["u"];
        break;
      default:
        strEncriptado += character;
    }
  });

  return strEncriptado;
}

function desencriptar(str) {
  let strLowercase = str.toLowerCase();
  for (let prop in llaves) {
    // si str incluye prperty, se reemplaza property por
    if (strLowercase.includes(llaves[prop])) {
      console.log(prop, llaves[prop]);
      strLowercase = strLowercase.replaceAll(llaves[prop], prop);
    }
  }
  return strLowercase;
}
