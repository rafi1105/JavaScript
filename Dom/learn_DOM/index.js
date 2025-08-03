let checkBox= document.querySelectorAll('input[type="checkbox"]')
checkBox.forEach(element => {
    element.checked=false;
});

function insetSafe(element, userName){
    element.innerHTML = userName + " rafi";
}

let e1 = document.querySelector('.safeInsert');
let userNameInput = document.querySelector('input[type="text"]');
let userNameValue = userNameInput.value; // Get the 
// input value
document.querySelector("p").style.color= "red"
// Update content when input changes
userNameInput.addEventListener('input', function() {
    insetSafe(e1, this.value);
});

// Initial call with current value
insetSafe(e1, userNameValue);

const card = document.querySelector(".card")
 card.classList.add("active")
 card.classList.toggle('active');

 // dark mode
const darkMode = (()=>{
    let toggle = document.querySelector("body")
    if (toggle.classList.contains('dark')){
        toggle.classList.toggle('dark');
        toggle.classList.toggle('light');
    }
    else{
        toggle.classList.toggle('dark');
        toggle.classList.toggle('light');
    }

})

// todo 
