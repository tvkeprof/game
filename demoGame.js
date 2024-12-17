// const memoryCard = document.getElementById("memoryCard");

// const values =[
//     "🐉",
//     "🐉",
//     "😎",
//     "😎",
//     "🐶",
//     "🐶",
//     "🐻",
//     "🐻",
//     "🐷",
//     "🐷",
//     "🐰",
//     "🐰",
//     "🦊",
//     "🦊",
//     "🐍",
//     "🐍",
// ]


// function shuffle(array) {
//     for(let i= array.length -1; i>0; i --) {
//         const j = Math.floor(Math.random()* (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];

//     }
//     // console.log(array);
    

//     return array;
// } 
// shuffle(values)

// values.forEach((values)=>{
//     console.log(values);
//     const card = document.createElement("div")
//     card.classList.add("card")
//     card.dataset.values=values
//     card.innerHTML ='<span class="hidden">'+ values + '</span>'
//     memoryCard.appendChild(card)
// });
// let firstCard = null;
// let secondCard = null;
// let lockBoard = false;

// function flipCard(event) {
//     if(lockBoard) return;
//     const clickedCard = event.target.closest(".card");
//     if (!clickedCard || clickedCard === firstCard) return;
//     // const clickedCard = event.target;
//     // if(clickedCard === firstCard) return;

//     clickedCard.classList.add("flipped");
//     clickedCard.querySelector("span").classList.remove("hidden");

//     if(!firstCard){
//         firstCard = clickedCard;
//     } else {
//         secondCard = clickedCard;
//         checkForMatch();
//     }
// }
// function checkForMatch() {
//     const isMatch = firstCard.dataset.value === secondCard.dataset.values
//     isMatch ? disableCards() : unflipcards();
// }

// function disableCards(){
//     firstCard.removeEventListener("click", flipCard);
//     secondCard.removeEventListener("click", flipCard);
//     resetBoard();
// }
// function unflipcards(){
//     lockBoard = true;
//     setTimeout(() => {
//         firstCard.classList.remove("flipped");
//         firstCard.querySelector("span").classList.add("hidden");
//         secondCard.classList.remove("flipped");
//         secondCard.querySelector("span").classList.add("hidden");
//         resetBoard();
//     }, 1000);
// }

// function resetBoard() {
//     [firstCard, secondCard, lockBoard] = [null, null, false];
// }
// document.querySelectorAll(".card").forEach((card) => {
//     card.addEventListener("click", flipCard);
// });
// // const array = document.querySelectorAll(".card");
// // console.log(array);
// //  document.querySelectorAll(".card").forEach((card)=> {
// //     card.addEventListener("click", flipCard);
// //  });

const memoryCard = document.getElementById("memoryCard");

const values = [
    "🐉", "🐉", "😎", "😎", "🐶", "🐶", "🐻", "🐻",
    "🐷", "🐷", "🐰", "🐰", "🦊", "🦊", "🐍", "🐍"
];

// Shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
shuffle(values);

// Generate cards
values.forEach((value) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.value = value; // Fixed to 'value'
    card.innerHTML = `<span class="hidden">${value}</span>`;
    memoryCard.appendChild(card);
});

// Card flipping logic
let firstCard = null;
let secondCard = null;
let lockBoard = false;

function flipCard(event) {
    if (lockBoard) return;
    const clickedCard = event.target.closest(".card"); // Ensure a card is clicked
    if (!clickedCard || clickedCard === firstCard) return;

    clickedCard.classList.add("flipped");
    clickedCard.querySelector("span").classList.remove("hidden");

    if (!firstCard) {
        firstCard = clickedCard;
    } else {
        secondCard = clickedCard;
        checkForMatch();
    }
}

function checkForMatch() {
    const isMatch = firstCard.dataset.value === secondCard.dataset.value;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove("flipped");
        firstCard.querySelector("span").classList.add("hidden");
        secondCard.classList.remove("flipped");
        secondCard.querySelector("span").classList.add("hidden");
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

// Add event listeners AFTER the cards are appended
document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", flipCard);
});
