function today() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("date").setAttribute("min", today);
    document.getElementById("date").setAttribute("value", today);
}


// Function to check Whether both passwords
// is same or not.
function checkPassword(form) {
    password = form.password.value;
    password_check = form.password_check.value;

    // If Not same return False.    
    if (password != password_check) {
        alert("\nPassword did not match: Please try again...")
        return false;
    }

    // If same return True.
    else {
        alert("Password Match: Welcome to Sport-Activities")
        return true;
    }
}

function setScroolChat() {
    var objDiv = document.getElementById("chat");
    objDiv.scrollTop = objDiv.scrollHeight;
}

function time() {
    let today = new Date();
    if(today.getMinutes() < 10){
        return today.getHours() + ':0' + today.getMinutes();
    } else{
        return today.getHours() + ':' + today.getMinutes();
    }
}

function truncate(input) {
    if (input.length > 120) {
       return input.substring(0, 120) + '...';
    }
    return input;
 };
    