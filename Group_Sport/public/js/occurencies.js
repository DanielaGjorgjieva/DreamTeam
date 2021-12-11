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

        //don't needed cause password is required, the form already complains if you forget the password
        //                                                                        Francesco 10 Dec 18:40

        // // If password not entered
        // if (password == '')
        //     alert ("Please enter Password");
                
        // // If confirm password not entered
        // else if (password_check == '')
        //     alert ("Please confirm your password");
                

        // If Not same return False.    
        if (password != password_check) {
            alert ("\nPassword did not match: Please try again...")
            return false;
        }

        // If same return True.
        else{
            alert("Password Match: Welcome to Sport-Activities")
            return true;
        }
    }