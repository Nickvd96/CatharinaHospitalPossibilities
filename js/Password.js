function passwordVisibility() {
    var x = document.getElementById("thePassword");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password"
    }
}
