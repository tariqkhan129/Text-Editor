
function fontSize(e) {
    let value = e.value;
    TextArea.style.fontSize = value + "px";
}
    function textBold(){
        var myText = document.getElementById("TextArea");
        if( myText.style.fontWeight == "bold" ) {
            myText.style.fontWeight = "normal";
        } else {
            myText.style.fontWeight = "bold";
        }
    }

    function textItalic(){
        var myText = document.getElementById("TextArea");
        if( myText.style.fontStyle == "italic" ) {
            myText.style.fontStyle = "normal";
        } else {
            myText.style.fontStyle = "italic";
        }
    }
    
    function textUnderline(){
        var myText = document.getElementById("TextArea");
        if( myText.style.textDecoration == "underline" ) {
            myText.style.textDecoration = "none";
        } else {
            myText.style.textDecoration = "underline";
        }
    }

    function textCapitalize(e) {
    if (TextArea.style.textTransform == "uppercase") {
        TextArea.style.textTransform = "lowercase";
    }
    else {
        TextArea.style.textTransform = "uppercase";
    }
}
