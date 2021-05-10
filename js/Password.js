function passwordFunction(){
    const passwordVisible = document.querySelector(".password-field");
    if (passwordVisible.type === "password") {
        passwordVisible.type = "text";
    } else {
        passwordVisible.type = "password";
    }
}