function validateForm() {
    var form1 = document.getElementById("form1")
    var form2 = document.getElementById("form2");
    

    var x = document.forms["myForm"]["radio"].value;
    if (x == "") {
    alert("De vraag moet nog beantwoord worden..");
    return false;
    } else {
        form1.style.display = "none";
        form2.style.display = "block";
    
        button.style.display = "none";
        button2.style.display = "block";

        document.getElementById("vraag").innerHTML = "Hier komt de tweede vraag te staan?";
    }
}

function validateForm2() {
    var form2 = document.getElementById("form2");
    var form3 = document.getElementById("form3");

    var x = document.forms["myForm2"]["radio2"].value;
    if (x == "") {
    alert("De vraag moet nog beantwoord worden..");
    return false;
    } else {
        form2.style.display = "none";
        form3.style.display = "block";
    
        button2.style.display = "none";
        button3.style.display = "block";

        document.getElementById("vraag").innerHTML = "Hier komt de derde vraag te staan?";
    }
}

function validateForm3() {
    var form3 = document.getElementById("form3");

    var x = document.forms["myForm3"]["radio3"].value;
    if (x == "") {
    alert("De vraag moet nog beantwoord worden..");
    return false;
    } else {
        form3.style.display = "none";
    
    button3.style.display = "none";
    
    window.location.href = "zelftestResultaat.html";
    }
}