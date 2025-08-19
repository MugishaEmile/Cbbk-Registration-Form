const form = document.getElementById("registrationForm");
form.addEventListener("submit",function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const location = document.getElementById("location").value;
    const gender = document.getElementById("genter").value;
    const comment = document.getElementById("comment").value;
    const booleanVal = document.getElementById("boolean").value;

    let familly = "";
    const checkboxes = document.getElementsByName("familly");
    checkboxes.forEach((item) => {
        if(item.checked) {
            familly = item.value;
        }
    });
    

    alert(" ✅ Your Registration was Submitted succefully!");
    form.rest();
});

function onlyone(checkbox) {
    const checkboxes = document.getElementsByName("familly");
    checkboxes.forEach((item) => {
        if(item !== checkbox) {
            item.checked = false;
        }
    });
}
