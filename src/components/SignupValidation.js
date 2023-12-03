
const Validation = (values) =>  {
    let error = {};

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    const confirm_password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    
    if(values.name === ""){
        error.name = "Name should not be empty"
    }
    else{
        error.name = ""
    }

    if(values.email === ""){
        error.email = "Email should not be empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Email doesn't match"
    }else{
        error.email = ""
    }  

    if(values.password === ""){
        error.password = "Password should not be empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "min.8 letters,uppercase and number"
    }else{
        error.password = ""
    }

    if(values.confirmPassword === ""){
        error.confirmPassword = "Confirm your password"
    }
    else if(!confirm_password_pattern.test(values.confirmPassword)){
        error.confirmPassword =  "Min. of 8 Uppercase letters and numbers"
    }
    else if(values.password > values.confirmPassword && values.password != values.confirmPassword){
        error.confirmPassword = "Both passwords does not match"
    }else{
        error.confirmPassword = ""
    }

    return error;
}




export default Validation;
