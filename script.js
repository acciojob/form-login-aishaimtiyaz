function getFormvalue() {
        // Corrected method name to getElementsByName
        let fname = document.getElementsByName("fname")[0].value;
        let lname = document.getElementsByName("lname")[0].value;
        alert(fname + " " + lname);
    }