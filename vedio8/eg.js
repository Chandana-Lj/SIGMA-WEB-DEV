function submitForm() {
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;
    let comment = document.getElementById("comment").value;

    if (name === "" || city === "" || comment === "") {
        alert("Please fill out all fields.");
        return;
    }

    alert('Name: ${name}\nCity: ${city}\nComment: ${comment}');
}
