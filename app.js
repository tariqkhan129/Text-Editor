 
function fontSize(e) {
    let value = e.value;
    TextArea.style.fontSize = value + "px";
}


    function textBold(){
        var target = document.getElementById("TextArea");
        if( target.style.fontWeight == "bolder" ) {
            target.style.fontWeight = "normal";
        } else {
            target.style.fontWeight = "bolder";
        }
    }
    
    
    
    function textItalic(){
        var target = document.getElementById("TextArea");
        if( target.style.fontStyle == "italic" ) {
            target.style.fontStyle = "normal";
        } else {
            target.style.fontStyle = "italic";
        }
    }
    
    function textUnderline(){
        var target = document.getElementById("TextArea");
        if( target.style.textDecoration == "underline" ) {
            target.style.textDecoration = "none";
        } else {
            target.style.textDecoration = "underline";
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
