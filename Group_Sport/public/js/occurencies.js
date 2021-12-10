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
        password1 = form.password1.value;
        password2 = form.password2.value;

        // If password not entered
        if (password1 == '')
            alert ("Please enter Password");
                
        // If confirm password not entered
        else if (password2 == '')
            alert ("Please enter confirm password");
                
        // If Not same return False.    
        else if (password1 != password2) {
            alert ("\nPassword did not match: Please try again...")
            return false;
        }

        // If same return True.
        else{
            alert("Password Match: Welcome to Sport-Activities")
            return true;
        }
    }