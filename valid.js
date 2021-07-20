function validate() {

    if (document.myForm.Name.value == "") {
        document.getElementById("showError").innerHTML = "Enter your name!";
        document.myForm.Name.focus();
        return false;
    }

    if (document.myForm.EMail.value == "") {
        document.getElementById("showError").innerHTML = "Enter your Email!";
        document.myForm.EMail.focus();
        return false;
    }

    if (document.myForm.Zip.value == "" || isNaN(document.myForm.Zip.value) ||
        document.myForm.Zip.value.length != 6) {

        document.getElementById("showError").innerHTML = "Enter Your Pin.";
        document.myForm.Zip.focus();
        return false;
    }

    if (document.myForm.Country.value == "-1") {
        document.getElementById("showError").innerHTML = "Enter your country!";
        return false;
    }

    
    return (true);
}