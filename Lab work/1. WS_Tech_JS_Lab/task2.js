function validateForm() {
    let name = document.getElementById("name").value;
    let doj = document.getElementById("doj").value;
    let mobile = document.getElementById("mobile").value;
    let address = document.getElementById("address").value;
    let dept = document.getElementById("dept").value;

    let pattern = /^[0-9]{10}$/;

    if (name === "" || doj === "" || address === "" || dept === "") {
        alert("All fields are required");
        return false;
    }

    if (!pattern.test(mobile)) {
        alert("Enter valid 10-digit mobile number");
        return false;
    }

    alert("Employee form submitted successfully");
    return true;
}
