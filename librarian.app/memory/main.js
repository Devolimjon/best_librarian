const body = document.querySelector('body');
const logo = document.createElement('h1')
const logo2 = document.createElement('h1')
const input_div = document.createElement('div');
const input_email = document.createElement('input');
const input_password = document.createElement('input');
const button_sign_in = document.createElement('a');
const log_in = document.createElement('a');
const menu = document.createElement('div');
const con = document.createElement('div');
const titel = document.createElement('h1');
const menu_books = document.createElement('button');
const menu_settings = document.createElement('button');
const menu_sign_up = document.createElement('button');
const menu_log_out = document.createElement('button');
const name = document.createElement('input')
const surname = document.createElement('input')
const email = document.createElement('input')
const email_password = document.createElement('input')
const phone_number = document.createElement('input')
const sign_in = document.createElement('button')
const date = [
    {
        emaili:"olimjonmahmuov26156@gmail.com",
        password:"max26156"
    },
    {
        emaili: "muhamadodilbekov@gmail.com",
        password: "12345678"
    }
]
input_email.type = "email"
input_password.type = "password"
log_in.classList.add('button_sign_in')
body.classList.add('body');
logo.classList.add('logo')
logo2.classList.add('logo')
logo.innerHTML = "Welcome to"
logo2.innerHTML = "Bestlibrarian"
body.appendChild(logo)
body.appendChild(logo2)
input_div.classList.add('input_div')
input_email.classList.add('input_email');
input_email.placeholder = "Email..."
input_password.classList.add('input_password');
input_password.placeholder = "Password..."
button_sign_in.classList.add('button_sign_in')
button_sign_in.innerHTML = 'Sign in'
log_in.innerHTML = "Log in with out an acount"
log_in.style.backgroundColor = "rgb(84, 132, 209)"
log_in.style.padding = "14px 55px"
body.appendChild(input_div);
input_div.appendChild(input_email);
input_div.appendChild(input_password);
input_div.appendChild(button_sign_in);
input_div.appendChild(log_in)

button_sign_in.addEventListener('click',input_test)

function input_test(){
    if((input_email.value === ""&&input_password.value === "")||
        (input_email.value === "")||(input_password.value === "")){
        const error = document.createElement("div");
        error.classList.add('error')
        body.appendChild(error);
        error.innerText = "You are don't finished formul"
        error.addEventListener('click', function(){
            error.classList.add('d-none')
            return error;
        })
        console.error("error")
    }
    for (let i = 0; i < date.length;i++){
    if (input_email.value === date[i].emaili||input_password.value === date.password){
        body.removeChild(logo);
        body.removeChild(logo2);
        body.removeChild(input_div);
        body.classList.add('section');
        body.appendChild(menu);
        menu.classList.add('menu');
        body.appendChild(con);
        con.classList.add('con');
        menu.appendChild(titel);
        titel.innerHTML = 'Bestlibrarian';
        titel.classList.add('title');
        menu_books.classList.add('menu_btn');
        menu_settings.classList.add('menu_btn');
        menu_sign_up.classList.add('menu_btn');
        menu_log_out.classList.add('menu_btn');
        menu_books.innerHTML = "BOOKS"
        menu_settings.innerHTML = "SETTINGS"
        menu_sign_up.innerHTML = "SIGN IN "
        menu_log_out.innerHTML = "LOG OUT"
        menu.appendChild(menu_books)
        menu.appendChild(menu_settings)
        menu.appendChild(menu_sign_up)
        menu.appendChild(menu_log_out)
        menu_log_out.addEventListener('click',function (){
            body.removeChild(menu)
            body.removeChild(con)
            input_email.type = "email"
            input_password.type = "password"
            log_in.classList.add('button_sign_in')
            body.classList.add('body');
            logo.classList.add('logo')
            logo2.classList.add('logo')
            logo.innerHTML = "Welcome to"
            logo2.innerHTML = "Bestlibrarian"
            body.appendChild(logo)
            body.appendChild(logo2)
            input_div.classList.add('input_div')
            input_email.classList.add('input_email');
            input_email.placeholder = "Email..."
            input_password.classList.add('input_password');
            input_password.placeholder = "Password..."
            button_sign_in.classList.add('button_sign_in')
            button_sign_in.innerHTML = 'Sign in'
            log_in.innerHTML = "Log in with out an acount"
            log_in.style.backgroundColor = "rgb(84, 132, 209)"
            log_in.style.padding = "14px 55px"
            body.appendChild(input_div);
            input_div.appendChild(input_email);
            input_div.appendChild(input_password);
            input_div.appendChild(button_sign_in);
            input_div.appendChild(log_in)
            body.classList.add('body')
            body.classList.remove('section')
            menu_log_out.classList.add('color')
        })
    }
    }
}

log_in.addEventListener('click', function(){
    body.removeChild(logo);
    body.removeChild(logo2);
    body.removeChild(input_div);
    body.classList.add('section');
    body.appendChild(menu);
    menu.classList.add('menu');
    body.appendChild(con);
    con.classList.add('con');
    menu.appendChild(titel);
    titel.innerHTML = 'Bestlibrarian';
    titel.classList.add('title');
    menu_books.classList.add('menu_btn');
    menu_settings.classList.add('menu_btn');
    menu_sign_up.classList.add('menu_btn');
    menu_log_out.classList.add('menu_btn');
    menu_books.innerHTML = "BOOKS"
    menu_settings.innerHTML = "SETTINGS"
    menu_sign_up.innerHTML = "SIGN IN "
    menu_log_out.innerHTML = "LOG OUT"
    menu.appendChild(menu_books)
    menu.appendChild(menu_settings)
    menu.appendChild(menu_sign_up)
    menu.appendChild(menu_log_out)
    menu_log_out.addEventListener('click',function (){
        body.removeChild(menu)
        body.removeChild(con)
        input_email.type = "email"
        input_password.type = "password"
        log_in.classList.add('button_sign_in')
        body.classList.add('body');
        logo.classList.add('logo')
        logo2.classList.add('logo')
        logo.innerHTML = "Welcome to"
        logo2.innerHTML = "Bestlibrarian"
        body.appendChild(logo)
        body.appendChild(logo2)
        input_div.classList.add('input_div')
        input_email.classList.add('input_email');
        input_email.placeholder = "Email..."
        input_password.classList.add('input_password');
        input_password.placeholder = "Password..."
        button_sign_in.classList.add('button_sign_in')
        button_sign_in.innerHTML = 'Sign in'
        log_in.innerHTML = "Log in with out an acount"
        log_in.style.backgroundColor = "rgb(84, 132, 209)"
        log_in.style.padding = "14px 55px"
        body.appendChild(input_div);
        input_div.appendChild(input_email);
        input_div.appendChild(input_password);
        input_div.appendChild(button_sign_in);
        input_div.appendChild(log_in)
        body.classList.add('body')
        body.classList.remove('section')
        menu_log_out.classList.add('color')
    })
    menu_sign_up.addEventListener('click', function (){

    })
})

console.log(date)