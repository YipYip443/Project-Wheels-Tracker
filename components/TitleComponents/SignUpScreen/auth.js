//signup

import { auth } from "../../../db/firestore";

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = signupForm['email'].value;
    const password = signupForm['password'].value;

    //sign up the user into firestore
    auth.createUserWithEmailAndPassword(email,password)
    .then(cred => {
        console.log(cred.user);
        const 
    })


})