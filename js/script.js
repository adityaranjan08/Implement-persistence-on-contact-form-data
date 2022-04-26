//Provide the solution code here
let contact = [];

// listen to click of addContact button and add maximum of two additional inputs for inputting Contact Nos.
var notes = document.getElementById('notes').maxLength;
   
const submitContact = async(event) => {
    event.preventDefault();
    //contact object captures all the inputs provided

    //errors object captures all the validation errors

    //display validation summary with error messages

    //if no errors, push the contact to contacts array

    //contacts can be logged on to console, or can even be updated on UI

    var firstName = document.getElementById('firstname');


    var lastName = document.getElementById('lastname');

    var email = document.getElementById('email');
    var homeNo = document.getElementById('homeNo');
    var workNo = document.getElementById('workNo');
    var dob = document.getElementById('birthdate');
    var company = document.getElementById('company');
    var jobTitle = document.getElementById('jobTitle');
    var notes = document.getElementById('notes');
    var homeNo1 = document.getElementById('homeNo1');
    var workNo1 = document.getElementById('workNo1');
    




    
      

    let firstNameErrorMsg = document.getElementById('firstNameError').innerText = validateFirstName(firstName.value);
    let lastNameErrorMsg = document.getElementById('lastNameError').innerText = validateLastName(lastName.value);
    let emailErrorMsg = document.getElementById('emailError').innerText = validateEmail(email.value);
    let homeNoErrorMsg = document.getElementById('homeNoError').innerText = validateHomeNo(homeNo.value);
    let workNoErrorMsg = document.getElementById('workNoError').innerText = validateWorkNo(workNo.value);
    let birthdateErrorMsg = document.getElementById('birthdateError').innerText = validatebirthdate(dob.value);

    let notesErrorMsg = document.getElementById('notesError').innerText = validateNotes(notes.value);
    
    let homeNo1ErrorMsg = document.getElementById('homeNo1Error').innerText = validateHomeNo1(homeNo1.value);
    console.log(homeNo1ErrorMsg);
    let workNo1ErrorMsg = document.getElementById('workNo1Error').innerText = validateWorkNo1(workNo1.value);

//    console.log(homeNo1ErrorMsg);
//    console.log(workNo1ErrorMsg);

    if(firstNameErrorMsg === "valid" && lastNameErrorMsg === "valid" && emailErrorMsg=== "valid" && homeNoErrorMsg=== "valid" && workNoErrorMsg === "valid" && birthdateErrorMsg=== "valid" && notesErrorMsg=== "valid" && homeNo1ErrorMsg ==="Home Number field can not be blank" && workNo1ErrorMsg ==="Work Number field can not be blank"){
        let contacts1 = {
            firstName : firstName.value,
            lastName  : lastName.value,
            email : email.value,
            homeNo : homeNo.value,
            workNo : workNo.value,
            homeNo1 : homeNo1.value,
            workNo1 : workNo1.value,
            dob : dob.value,
            company: company.value,
            jobTitle: jobTitle.value,
            notes: notes.value
        }
        contact.push(contacts1);
        var stringifyContact =JSON.stringify(contacts1);
        persistSubmittedContact(stringifyContact);

    }else if(firstNameErrorMsg === "valid" && lastNameErrorMsg === "valid" && emailErrorMsg=== "valid" && homeNoErrorMsg=== "valid" && workNoErrorMsg === "valid" && birthdateErrorMsg=== "valid" && notesErrorMsg=== "valid" && homeNo1ErrorMsg ==="valid" && workNo1ErrorMsg==="valid"){
        let contacts2 = {
            firstName : firstName.value,
            lastName  : lastName.value,
            email : email.value,
            homeNo : homeNo.value,
            workNo : workNo.value,
            homeNo1 : homeNo1.value,
            workNo1 : workNo1.value,
            dob : dob.value,
            company: company.value,
            jobTitle: jobTitle.value,
            notes: notes.value
        }
        contact.push(contacts2);
        var stringifyContact =JSON.stringify(contacts2);
        persistSubmittedContact(stringifyContact);

    }
   
}

//function to display validation summary with error messages provided

//function to display error messages alongside the input fields

//function to validate firstName

const validateFirstName = (fName) => {
    var letters = /^[A-Za-z.]+$/;
    if (fName === '') {
        return 'firsttName field can not be blank';
    } else if (letters.test(fName)) {
        return 'valid';
    } else {
        return 'invalid';
    }
}



//function to validate lastName

const validateLastName = (lName) => {
    var letters = /^[A-Za-z.]+$/;
    if (lName === '')
        return 'lastName field can not be blank';
    else if (letters.test(lName)) {
        return 'valid';
    } else {
        return 'invalid';
    }
}

//function to validate email

const validateEmail = (email) => {
    var emailFormat = /\S+@\S+\.\S/
    if (email === '') {
        return 'email field can not be blank';
    }
    else if (emailFormat.test(email)) {
        return 'valid';
    } else {
        return 'invalid';
    }

}

//function to validate home no

const validateHomeNo = (hNo) => {
    var houseNoFormat = /\W{1}9{1}1{1}\d{10}/;
    if (hNo === '') {
        return 'Home Number field can not be blank';
    } else if (houseNoFormat.test(hNo)) {
        return 'valid';
    } else {
        return 'invalid';
    }

}

//function to validate work no

const validateWorkNo = (wNo) => {
    var workNoFormat = /\W{1}9{1}1{1}\d{10}/;
    if (wNo === '') {
        return 'Work Number field can not be blank';
    } else if (workNoFormat.test(wNo)) {
        return 'valid';
    } else {
        return 'invalid';
    }

}

//function to validate additional contact no


const validateHomeNo1 = (homeNo1) => {
    var homeNo1Format = /\W{1}9{1}1{1}\d{10}/;
    if (homeNo1 === '') {
        return 'Home Number field can not be blank';
    } else if (homeNo1Format.test(homeNo1)) {
        return 'valid';
    } else {
        return 'invalid';
    }

}
//function to validate additional contact no

const validateWorkNo1 = (WorkNo1) => {
    var workNo1Format = /\W{1}9{1}1{1}\d{10}/;
    if (WorkNo1 === '') {
        return 'Work Number field can not be blank';
    } else if (workNo1Format.test(WorkNo1)) {
        return 'valid';
    } else {
        return 'invalid';
    }
}

//function to validate notes

const validateNotes = (notes) => {
    if (notes === '') {
        return 'notes field can not be blank';

    } else {
        return "valid";
    }

}

//disable all dates for whom age is less than 18
const validatebirthdate = (birthdate) => {
    if (birthdate === '')
        return 'birthdate field can not be blank';
    else {
        var dob = new Date(birthdate);
        var month_diff = Date.now() - dob.getTime();
        var age_dt = new Date(month_diff);
        var year = age_dt.getUTCFullYear();
        var age = Math.abs(year - 1970);
        if (age > 15) {
            return "valid";
        } else return 'age less than 15';
    }
}


document.getElementById("contactNos1").style.display = "none";
function ToExecute() {
    document.getElementById("contactNos1").style.display = "inline";
}


