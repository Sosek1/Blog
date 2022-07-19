const loginValidation = (login) => {
    const loginPattern = /^[A-Z][a-zA-Z0-9]{5,9}$/;
    return loginPattern.test(login)  
}

const passwordValidation = (password) => {
    const passwordPattern = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/g;
    return passwordPattern.test(password)
}

export {loginValidation, passwordValidation};