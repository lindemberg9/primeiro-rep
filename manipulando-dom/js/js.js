var nomeBootInputText = window.document.getElementById("nomeBoot");

function selecionarCampos() {
    console.log("typeof: " + typeof nomeBootInputText);
    console.log("Object call: " + Object.prototype.toString.call(nomeBootInputText));
    // alert(nomeBootInputText); // !elegant
    console.log("Recuperar valor com value: " + nomeBootInputText.value);
    // nomeBootInputText.disabled = true;
    //console.log('disabled: nomeBootInputText.disabled = true;');
    //nomeBootInputText.readOnly = true;
    console.log("readOnly: nomeBootInputText.readOnly = true;");
    console.log("tagName: " + nomeBootInputText.tagName);
    console.log("tagName type: " + nomeBootInputText.type);
    nomeBootInputText.value = "pedro";
}
