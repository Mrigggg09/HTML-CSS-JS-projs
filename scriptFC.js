console.log('Welcome to Forget Password!');

import {data,numberOfAccounts,addToData,updateAccCount} from './data.js';

// Sign In Again Button Working:

const signInAgain = document.getElementById('signInAgain');

signInAgain.addEventListener('click',()=>{
    console.log('sign in again clicked');

    const emailInput = document.getElementById('emailInput');
    emailValue = emailInput.value;
    console.log(emailValue);

    const phoneNumberInput = document.getElementById('phoneNumberInput');
    phoneNumberValue = phoneNumberInput.value;
    console.log(phoneNumberValue);

    const authChoiceInput = document.getElementById('passwordAuthQues');
    authChoiceValue = authChoiceInput.value;
    console.log(authChoiceValue);

    const authAnsInput = document.getElementById('passwordAuthAnsValue');
    authAnsValue = authAnsInput.value;
    console.log(authAnsValue);

    const errorMessage = document.getElementById('errorMessage');
    const displayUsername = document.getElementById('displayUsername');
    const displayPassword = document.getElementById('displayPassword');

    //Check Validity of Email and Phone Number

    const checkValidEmail = (email)=>{
        console.log('checking for email id validity');
        return (email.includes('@gmail.com') || email.includes('@yahoo.com'));
    }
    const checkValidPhoneNumber = (phno)=>{
        console.log('checking for phone number validity');
        return (phno.length===10 && !isNaN(parseInt(phno)));
    }
    const checkValidString = (str)=>{
        console.log('checking for str alphabet format validity');
        return /^[A-Za-z\s]+$/.test(str);
    }

    let isMatching = false;

    if(emailValue!=='' && phoneNumberValue!=='' && authAnsValue!==''){
        if(!checkValidEmail(emailValue)){
            errorMessage.innerText="Invalid email format";
        }
        else if(!checkValidPhoneNumber(phoneNumberValue)){
            errorMessage.innerText="Invalid phone number format";
        }
        else if(!checkValidString(authAnsValue)){
            errorMessage.innerText="Invalid ans format";
        }
        else{
            phoneNumberValue = parseInt(phoneNumberValue);
            //Matching is email and phone number exist
            data.forEach((element)=>{
                if(element['email'] === emailValue && element['phno'] === phoneNumberValue && ((authChoiceValue==='pet' && element['petname'] === authAnsValue) || (authChoiceValue==='school' && element['schoolname'] === authAnsValue) || (authChoiceValue==='sport' && element['favsportname'] === authAnsValue))){
                    isMatching = true;
                    displayUsername.innerText = `Username : ${element.username}`;
                    displayPassword.innerText = `Password : ${element.password}`;
                }
            })
            if(!isMatching){
                errorMessage.innerText = 'Your credentials do not match. Try again or feel free to sign up'
            }
        }
    }
    else{
        errorMessage.innerText="Please fill all the fields";
    }
})