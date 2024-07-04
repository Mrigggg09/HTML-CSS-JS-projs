console.log('Welcome to login page.');

import {data,numberOfAccounts,addToData,updateAccCount} from './data.js';

let signInErrorMessage = document.getElementById('signInErrorMessage');

// Check is entered data is matching

const matchData = ()=>{
    const usernameInput = document.getElementById('usernameInput');
    const usernameValue = usernameInput.value;
    const passwordInput = document.getElementById('passwordInput');
    const passwordValue = passwordInput.value;

    let usernameIsMatching = false;
    let passwordIsMatching = false;

    if(usernameValue === '' && passwordValue === ''){
        signInErrorMessage.innerText = 'Username and Password field is empty';
        console.log('Username and Password field is empty');
    }
    else if(usernameValue === ''){
        signInErrorMessage.innerText = 'Please enter username';
        console.log('Please enter username');
    }
    else if(passwordValue === ''){
        signInErrorMessage.innerText = 'Please enter password';
        console.log('Please enter password');
    }
    else{
        data.forEach((element)=>{
            if(element['username']===usernameValue && element['password']===passwordValue){
                usernameIsMatching = true;
                passwordIsMatching = true;
            }
            else if(element['username']===usernameValue && element['password']!==passwordValue){
                usernameIsMatching = true;
            }
        })
        if(usernameIsMatching && passwordIsMatching){
            signInErrorMessage.innerText = 'Logging in....';
            console.log('Logging in....');
        }
        else if(usernameIsMatching && !passwordIsMatching){
            signInErrorMessage.innerText = 'Password did not match';
            console.log('Password did not match');
        }
        else{
            signInErrorMessage.innerText = 'Invalid credentials';
            console.log('Invalid credentials');
        }
    }
};


// Sign In button working

const signIn = document.getElementById('signIn');

signIn.addEventListener('click',()=>{
//     console.log('Signed In.');
    matchData();
})

console.log(numberOfAccounts);