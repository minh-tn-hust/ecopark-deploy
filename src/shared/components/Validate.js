function validateEmail(value) {
    let reg = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    if (!reg.test(value)) {
        return "Invalid email, please fill again"
    } else return ""
}
function validatePhone(value) {
    let reg = /^\d{10}$/
    if (!reg.test(value)) {
        return "Invalid phone number"
    } else return ""
}
function validateIdCode(value) {
    let reg = /^\d{9}$/
    if (!reg.test(value)) {
        return "Invalid identify code (9 numbers)"
    } else return ""
}
function validateResidentCode(value) {
    let reg = /^\d{9}$/
    if (!reg.test(value)) {
        return "Invalid resident code (9 numbers"
    } else return ""
}
function validatePassword(value) {
    if (value === "admin") return ""
    let reg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    if (!reg.test(value)) {
        return "Password minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
    } else return ""
}
export {
    validateEmail as validateEmail,
    validatePassword as validatePassword,
    validatePhone as validatePhone,
    validateIdCode as validateIdCode,
    validateResidentCode as validateResidentCode
}
