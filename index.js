const llaves = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

function encriptar() {
  let textoAencriptar = document.getElementById("txt-encriptador").value;
  let textLowercase = textoAencriptar.toLowerCase();
  let strArr = [...textLowercase];
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
  console.log(strEncriptado);
  let elEncriptado = document.getElementById("mensaje-preliminar");
  elEncriptado.innerHTML = `<div class="mkwhite">
  <div class="div-textarea">
    <textarea
      cols="20"
      rows="30"
      class="parrafo-mensaje"
      id="msj-clipboard"
    >${strEncriptado}
    </textarea>
  </div>
  <div class="div-btn-copiar">
    <button class="btn-copiar" id="btn-copiar" onclick="copiar()">
      Copiar
    </button>
  </div>
</div>`;
}

function desencriptar() {
  let textoDesencriptar = document.getElementById("txt-encriptador").value;
  let strLowercase = textoDesencriptar.toLowerCase();
  for (let prop in llaves) {
    // si str incluye prperty, se reemplaza property por
    if (strLowercase.includes(llaves[prop])) {
      console.log(prop, llaves[prop]);
      strLowercase = strLowercase.replaceAll(llaves[prop], prop);
    }
  }
  let elEncriptado = document.getElementById("mensaje-preliminar");
  elEncriptado.innerHTML = `<div class="mkwhite">
  <div class="div-textarea">
    <textarea
      cols="20"
      rows="30"
      class="parrafo-mensaje"
      id="msj-clipboard"
    >${strLowercase}
    </textarea>
  </div>
  <div class="div-btn-copiar">
    <button class="btn-copiar" id="btn-copiar" onclick="copiar()">
      Copiar
    </button>
  </div>
</div>`;
}

function copiar() {
  let texto = document.getElementById("msj-clipboard").value;

  navigator.clipboard
    .writeText(texto)
    .then(() => {
      console.log("Texto copiado al portapapeles");
    })
    .catch((error) => {
      console.error("Error al copiar el texto", error);
    });
}
