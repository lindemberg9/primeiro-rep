var nomeBootInputText = window.document.getElementById("nomeBoot");
var estadoSelect = document.getElementById("estadoSelectBoot")

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

function selecionarCampoSelect() {
    console.log("Object: " + Object.prototype.toString.call(estadoSelect));
    console.log("estadoSelect.value: ", estadoSelect.value);
    console.log("estadoSelect.value = \"SP3\" :", estadoSelect.value = "SP3");
    console.log("get index: ", estadoSelect.selectedIndex);
    console.log("set index: ", estadoSelect.selectedIndex = "2");
    console.log("tagName ", estadoSelect.tagName);
    console.log("Tagname type ", estadoSelect.type);
    console.log(estadoSelect.selectedOptions);
    console.log(estadoSelect.selectedOptions.item(0));
    console.log(estadoSelect.selectedOptions[1]);
    console.log(estadoSelect.length);
    console.log(estadoSelect.disabled = true);
}

var emailPromocionalCheck = document.querySelector('#emailPromocionalCheckBoot');

function selecionarCampoEmailCheck() {
    console.log("Object call tipo", Object.prototype.toString.call(emailPromocionalCheck));
    console.log("tagName: ", emailPromocionalCheck.tagName);
    console.log("tagName type: ", emailPromocionalCheck.type);
    console.log("Valor value: ", emailPromocionalCheck.value);
    console.log("Checado: ", emailPromocionalCheck.checked);
}

var formaContatoRadio = document.querySelector("[name=formaContatoRadioBoot]");;

function selecionarCampoRadio() {
    console.log("Object call: ", Object.prototype.toString.call(formaContatoRadio));
    console.log("tagName: ", formaContatoRadio.tagName);
    console.log("tagName type: ", formaContatoRadio.type);
    console.log("Valor value: ", formaContatoRadio.value);
    console.log("Checado: ", formaContatoRadio.checked);
}
