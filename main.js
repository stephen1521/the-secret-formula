// part one
let partOneInput = document.querySelector('#partOneInput');
let partOneForm = document.querySelector('#partOne');

partOneForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert(partOneInput.value);
    partOneInput.value = '';
});

// part two

let partTwoForm = document.querySelector('#partTwo');
let ingredients = document.querySelectorAll('#partTwo .ingredients');

partTwoForm.addEventListener('submit', function(e){
    e.preventDefault();
    let sandwich = '';
    for(let i = 0; i < ingredients.length; i++){
        if(ingredients[i].querySelector('input').checked){
            let temp = ingredients[i].querySelector('label');
            sandwich += temp.innerText + ', ';
        }
    }
    sandwich = sandwich.substring(0, sandwich.length - 2);
    alert('Your sandwich contains: ' + sandwich);
    for(let i = 0; i < ingredients.length; i++){
        ingredients[i].querySelector('input').checked = false;
    }
});

// part three
let partThreeForm = document.querySelector('#partThree');
let date = document.querySelector('#date');
let hairCutter = document.querySelector('#hairCutter');
let currentHair = document.querySelector('#currenthair');
//default value is long hair
currentHair.querySelector('#longHair').checked = true;

partThreeForm.addEventListener('submit', function(e){
    e.preventDefault();
    let sentence = 'Haircut Scheduled for ' + date.value;
    if(hairCutter.value !== ''){
        sentence += ' with ' + hairCutter.value + ' for ';
    }else{
        sentence += ' for ';
    }
    if(currentHair.querySelector('#longHair').checked){
        sentence += 'long hair.';
    }else if(currentHair.querySelector('#shortHair').checked){
        sentence += 'short hair.';
    }
    alert(sentence);
    date.value = '0000-00-00';
    hairCutter.value = '';
    currentHair.querySelector('#longHair').checked = true;
})

// part four
let partFourForm = document.querySelector('#partFour');
let username = document.querySelector('#usernameInput');
let email = document.querySelector('#emailInput');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirmPassword');

let account = {};

partFourForm.addEventListener('submit', function(e){
    e.preventDefault();
    if(username.value.length < 3){
        alert('Username must be atleast 3 characters long');
    }else if(!email.value.includes('@')){
        alert('Email must contain an @ symbol');
    }else if(password.value.length < 4){
        alert('Password must be atleast 4 characters long');
    }else if(password.value !== confirmPassword.value){
        alert('Passwords do not match');
    }else{
        let obj = {
            username: username.value,
            email: email.value,
            password: password.value
        }
        account = obj;
        alert('Your username is ' + username.value + ' and your email is ' + email.value);
        username.value = '';
        email.value = '';
        password.value = '';
        confirmPassword.value = '';
    }
})

//login stretch goal
let login = document.querySelector('#login');
let usernameLogin = document.querySelector('#usernameLogin');
let passwordLogin = document.querySelector('#loginPassword');

login.addEventListener('submit', function(e){
    e.preventDefault();
    if((usernameLogin.value === account.username) && (passwordLogin.value === account.password)){
        alert('You succesfully logged in');
        usernameLogin.value = '';
        passwordLogin.value = '';
    } else {
        alert('An account does not exist with that username/email or the password entered is wrong.');
    }
})