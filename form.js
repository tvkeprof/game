document.body.style.width="100%";
document.body.style.textAlign="center";
const formTitle = document.createElement ("p");
formTitle.innerHTML = "Form";
formTitle.style.fontSize = "50px";
formTitle.style.fontWeight = "bold";
document.getElementById("form").appendChild(formTitle);

const nameContainer = document.createElement("div");
nameContainer.id = "name_container";
document.getElementById("form").appendChild(nameContainer);

const nameTitle = document.createElement("p");
nameTitle.innerHTML = "Name";
document.getElementById("name_container").appendChild(nameTitle);

const nameInput = document.createElement("input");
document.getElementById("name_container").appendChild(nameInput);
const nameInput2 = document.createElement("input");
document.getElementById("name_container").appendChild(nameInput2);

const dateContainer = document.createElement("div");
dateContainer.id = "date_container";
document.getElementById("form").appendChild(dateContainer);

const dateTitle = document.createElement("p");
dateTitle.innerHTML = "Date";
document.getElementById("date_container").appendChild(dateTitle);

const dateInput = document.createElement("input");
document.getElementById("date_container").appendChild(dateInput);

const ageContainer = document.createElement("div");
ageContainer.id = "age_container";
document.getElementById("form").appendChild(ageContainer);

const ageTitle = document.createElement("p");
ageTitle.innerHTML = "Age";
document.getElementById("age_container").appendChild(ageTitle);

const ageInput = document.createElement("input");
document.getElementById("age_container").appendChild(ageInput);

const genderContainer = document.createElement("div");
genderContainer.id = "gender_container";
document.getElementById("form").appendChild(genderContainer);

const genderTitle = document.createElement("p");
genderTitle.innerHTML = "Gender";
document.getElementById("gender_container").appendChild(genderTitle);

const genderInput = document.createElement("input");
document.getElementById("gender_container").appendChild(genderInput);


const passwordContainer = document.createElement("div");
genderContainer.id = "password_container";
document.getElementById("form").appendChild(passwordContainer);

const passwordTitle = document.createElement("p");
genderTitle.innerHTML = "Password";
document.getElementById("password_container").appendChild(passwordTitle);

// const passwordInput = document.createElement("input");
// document.getElementById("password_container").appendChild(passwordInput);






