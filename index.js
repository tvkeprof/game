// const parent = document.getElementById("parent-container").innerHTML = "Hello World"

// const body = document.getElementsByTagName("body");
// body.innerHTML = "log in";
// document.getElementById ("parent-container").appendChild(body);

// body.style.display = "flex"
// const p_tag = document.createElement("p");
// p_tag.innerHTML = " i create p tag";
// document.getElementById("parent-container").appendChild(p_tag);

// const new_element = document.createElement("div");
// new_element.innerHTML = "Log in"

// document.getElementById("parent-container").replaceChild(new_element, p_tag);

// new_element.style.color = "black";
// new_element.style.fontSize = "50px";
// new_element.style.display = "flex";
// new_element.style.justifyContent = "center";

// const nameUser = document.createElement("div");
// nameUser.innerHTML = "Username"
// document.getElementById("parent-container").appendChild(nameUser);

// const input = document.createElement("input");
// document.getElementById("parent-container").appendChild(input);
// input.style.display = "flex";
// input.style.justifyContent = "center"

// input.addEventListener("click", () => {
//     console.log("clicked");
//     console.log(input, value);
//     if(input.value.includes("@")){
//         console.log("true");
//     } else {
//         console.log("false");
//     }
// })
// const passpo = document.createElement("div");
// passpo.innerHTML = "Password";
// document.getElementById("parent-container").appendChild(passpo);

// const input2 = document.createElement("input");
// input2.getElementById("parent-container").appendChild(input2);

//  input2.addEventListener("keydown", () => {
//     console.log(input2, value);
//     if (input2.value.includes("@")) {
//         console.log("true");
//     }

//  })

document.body.style.width = "100%";
document.body.style.textAlign = "center";

const logintitle = document.createElement("p");
logintitle.innerHTML = "Login";
logintitle.style.fontSize = "60px";
logintitle.style.fontWeight = "bold";
document.getElementById("parent-container").appendChild(logintitle);

const emailContainer = document.createElement("div");
emailContainer.id = "email_container";
document.getElementById("parent-container").appendChild(emailContainer);

const emailTitle = document.createElement("p");
emailTitle.innerHTML = "email";
document.getElementById("email_container").appendChild(emailTitle);

const emailInput = document.createElement("input");
document.getElementById("email_container").appendChild(emailInput);

const passwordContainer = document.createElement("div");
passwordContainer.id="password_container";
document.getElementById("parent-container").appendChild(passwordContainer);

const passwordTitle = document.createElement("p");
passwordTitle.innerHTML = "password";
document.getElementById("password_container").appendChild(passwordTitle);

const passwordInput = document.createElement ("input");
document.getElementById("password_container").appendChild(passwordInput);

const button = document.createElement("p");
button.innerHTML = "submit";
button.style.background = "green";
button.style.padding = "6px";
button.style.width = "50px";
button.style.margin = "auto";
button.style.marginTop = "10px";
document.getElementById("parent-container").appendChild(button);

button.addEventListener("click", () => {
  if (emailInput.value.includes("@gmail.com")) {
    console.log(true);
  } else {
    const warning = document.createElement("p");
    warning.innerHTML = "Please enter valid email";
    warning.style.color = "red";
    document.getElementById("email_container").appendChild(warning);
  }
  if (passwordInput.value.length >= 8) {
    console.log(true);
  } else {
    const warning = document.createElement("p");
    warning.innerHTML = "Password should be contain 8 character at least";
    warning.style.color = "red";
    document.getElementById("password_container").appendChild(warning);
  }
});
// button.addEventListener("click", () => {
//     if(emailInput.value.includes("@gmail.com")){
//         console.log(true);
//     } else  {
//         const wrong = document.createElement("p");
//         wrong.innerHTML = "pls";
//         wrong.style.color= "red";
//         document.getElementById("password_container").appendChild(wrong);
//     }
// })
