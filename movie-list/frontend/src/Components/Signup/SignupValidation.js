function validation(values) {
    let error={};
    const name_pattern = /^^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/;
    const email_pattern = /^[^\s@]+@[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z-0-9]{8,}$/;


    // Validates name
    if(values.name === "") {
        error.name = "Name should not be empty";
    }
    else if (!name_pattern.test(values.name)) {
        error.name = "Name did not match";
    }
    else {
        error.name = "";
    }

    // Validates email
    if(values.email === "") {
        error.email = "Email should not be empty";
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "Email did not match";
    }
    else {
        error.email = "";
    }

    // Validates password
    if(values.password === "") {
        error.password = "Password should not be empty";
    }
    else if (!password_pattern.test(values.password)) {
        error.password = "Password did not match";
    }
    else {
        error.password = "";
    }

    return error;
}

export default validation;