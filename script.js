var formContainer = {
    'name': '',
    'mobileNumber': '',
    'emailId': '',
    'suggestions': ''
}

var fullname = document.getElementById('fullName');
var mobileNumber = document.getElementById('mobileNumber');
var emailId = document.getElementById('emailId');
var submitBtn = document.getElementById('submit');
var suggestions = document.getElementById('suggestion');

function validateName() {
    let isName = /^[a-zA-Z\s]+$/.test(fullname.value);

    //if the field is empty
    if(fullname.value == '') {
        //show a message to user
        document.getElementById('nameError').style.display = 'block';
        document.getElementById('nameError').innerHTML = 'Please enter name';
        return false;
    }else if(!isName) {
        //show a message to user
        document.getElementById('nameError').style.display = 'block';
        document.getElementById('nameError').innerHTML = 'Please enter valid name';
        return false;
    }else{
        //true condition
        document.getElementById('nameError').innerHTML = '';
        formContainer['name'] = fullname.value;
        return true;
    }
}

fullname.addEventListener('input', validateName);

function validateEmail () {
    let isEmail = /^([a-zA-Z])+([a-zA-Z0-9_.-])+\@(([a-zA-Z])+\.+?(com|co|in|org|net|edu|info|gov|vekomy))\.?(in|org|net|edu|info|gov)?$/.test(emailId.value);

    //if the field is empty
    if(emailId.value == '') {
        //show a message to user
        document.getElementById('emailError').style.display = 'block';
        document.getElementById('emailError').innerHTML = 'Please enter email id';
        return false;
    }else if(!isEmail) {
        //show a message to user
        document.getElementById('emailError').style.display = 'block';
        document.getElementById('emailError').innerHTML = 'Please enter valid email id';
        return false;
    }else{
        //true condition
        document.getElementById('emailError').innerHTML = '';
        formContainer['emailId'] = emailId.value;
        return true;
    }
}

emailId.addEventListener('input', validateEmail);

function validateMobileNumber() {
    let isMobile = /^[0]?[6789]\d{9}$/.test(mobileNumber.value);

    //if the field is empty
    if(mobileNumber.value == '') {
        //show a message to user
        document.getElementById('mobNoError').style.display = 'block';
        document.getElementById('mobNoError').innerHTML = 'Please enter mobile number';
        return false;
    }else if(!isMobile) {
        //show a message to user
        document.getElementById('mobNoError').style.display = 'block';
        document.getElementById('mobNoError').innerHTML = 'Please enter valid mobile number';
        return false;
    }else{
        //true condition
        document.getElementById('mobNoError').innerHTML = '';
        formContainer['mobileNumber'] = mobileNumber.value;
        return true;
    }
}

mobileNumber.addEventListener('input', validateMobileNumber);

function validate() {
    var validName = validateName();
    var validEmail = validateEmail();
    var validMobile = validateMobileNumber();
    return validName && validEmail && validMobile ? true : false;
}

function getFormValues(formContainer) {
    formContainer['suggestions'] = suggestions.value;
    return formContainer;
}

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    validate();
    var isValidForm = validate();
    if(isValidForm) {
        console.log('valid form');
        $.ajax({
            url: 'http://dummy.restapiexample.com/api/v1/create',
            method: 'post',
            type: 'application/json',
            data: getFormValues(formContainer),
        })
    }
})