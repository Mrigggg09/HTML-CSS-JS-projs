console.log('Welcome to Sign Up!');

import {data,numberOfAccounts,addToData,updateAccCount} from './data.js';

// Create Account Working

const createAccount = document.getElementById('createAccount');

createAccount.addEventListener('click',()=>{
    console.log('create account clicked')
    const fullNameInput = document.getElementById('fullNameInput');
    const fullNameValue = fullNameInput.value;
    // console.log(fullNameValue)
    const emailInput = document.getElementById('emailInput');
    const emailValue = emailInput.value;
    // console.log(emailValue)
    const phoneNumberInput = document.getElementById('phoneNumberInput');
    const phoneNumberValue = phoneNumberInput.value;
    // console.log(phoneNumberValue)
    const usernameInput = document.getElementById('usernameInput');
    const usernameValue = usernameInput.value;
    // console.log(usernameValue)
    const passwordInput = document.getElementById('passwordInput');
    const passwordValue = passwordInput.value;
    // console.log(passwordValue)
    const confirmPasswordInput = document.getElementById('confirmPasswordInput');
    const confirmPasswordValue = confirmPasswordInput.value;
    // console.log(confirmPasswordValue)
    const petNameInput = document.getElementById('authenticationPetNameInput');
    const petNameValue = petNameInput.value;
    // console.log(confirmPasswordValue)
    const schoolNameInput = document.getElementById('authenticationSchoolNameInput');
    const schoolNameValue = schoolNameInput.value;
    // console.log(confirmPasswordValue)
    const favSportInput = document.getElementById('authenticationFavSportNameInput');
    const favSportValue = favSportInput.value;
    // console.log(confirmPasswordValue)

    const signUpErrorMessage = document.getElementById('signUpErrorMessage');

    //Functions to check Validity of entered data
    
    const checkValidFullName = (fullName)=>{
        console.log('checking for full name validity');
        return /^[A-Za-z\s]+$/.test(fullName);
    }
    const checkValidEmail = (email)=>{
        console.log('checking for email id validity');
        return (email.includes('@gmail.com') || email.includes('@yahoo.com'));
    }
    const checkValidPhoneNumber = (phno)=>{
        console.log('checking for phone number validity');
        return (phno.length===10 && !isNaN(parseInt(phno)));
    }
    const checkIfPasswordsMatch = (confPass,Pass)=>{
        console.log('checking for passwords match validity');
        return (confPass===Pass);
    }

    //Check if value entered or not

    if(fullNameInput!=='' && emailValue!=='' && phoneNumberValue!=='' && usernameValue!=='' && passwordValue!=='' && confirmPasswordValue!==''){
        if(!checkValidFullName(fullNameValue)){
            signUpErrorMessage.innerText="Invalid Full Name Format Entered";
        }
        else if(!checkValidEmail(emailValue)){
            signUpErrorMessage.innerText="Invalid Email Format Entered";
        }
        else if(!checkValidPhoneNumber(phoneNumberValue)){
            signUpErrorMessage.innerText="Invalid Phone Number Format Entered";
        }
        else if(!checkIfPasswordsMatch(confirmPasswordValue,passwordValue)){
            signUpErrorMessage.innerText="Your Entered Passwords does not match";
        }
        else if(!checkValidFullName(petNameValue)){
            signUpErrorMessage.innerText="Invalid Pet Name Format Entered";
        }
        else if(!checkValidFullName(schoolNameValue)){
            signUpErrorMessage.innerText="Invalid School Name Format Entered";
        }
        else if(!checkValidFullName(favSportValue)){
            signUpErrorMessage.innerText="Invalid Sport Name Format Entered";
        }
        else{
            let newObj={
                fullname : fullNameValue,
                username : usernameValue,
                password : passwordValue,
                phno : phoneNumberValue,
                email : emailValue,
                petname : petNameValue,
                schoolname : schoolNameValue,
                favsportname : favSportValue
            }
            addToData(newObj);
            updateAccCount();
            signUpErrorMessage.innerText="Successfully Signining Up";
        }
    }
    else if(fullNameInput==='' && emailValue!=='' && phoneNumberValue!=='' && usernameValue!=='' && passwordValue!=='' && confirmPasswordValue!==''){
        signUpErrorMessage.innerText="Please Enter Full Name";
    }
    else if(emailValue==='' && fullNameValue!=='' && phoneNumberValue!=='' && usernameValue!=='' && passwordValue!=='' && confirmPasswordValue!==''){
        signUpErrorMessage.innerText="Please Enter Email";
    }
    else if(phoneNumberValue==='' && emailValue!=='' && fullNameValue!=='' && usernameValue!=='' && passwordValue!=='' && confirmPasswordValue!==''){
        signUpErrorMessage.innerText="Please Enter Phone Number";
    }
    else if(usernameValue==='' && emailValue!=='' && phoneNumberValue!=='' && fullNameValue!=='' && passwordValue!=='' && confirmPasswordValue!==''){
        signUpErrorMessage.innerText="Please Enter Username";
    }
    else if(passwordValue==='' && emailValue!=='' && phoneNumberValue!=='' && usernameValue!=='' && fullNameValue!=='' && confirmPasswordValue!==''){
        signUpErrorMessage.innerText="Please Enter Password";
    }
    else if(confirmPasswordValue==='' && emailValue!=='' && phoneNumberValue!=='' && usernameValue!=='' && passwordValue!=='' && fullNameValue!==''){
        signUpErrorMessage.innerText="Please Confirm Your Password";
    }
    else{
        signUpErrorMessage.innerText="Please Enter Values In Empty Fields";
    }
})