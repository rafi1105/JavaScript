let checkBox= document.querySelectorAll('input[type="checkbox"]')
checkBox.forEach(element => {
    element.checked=false;
});

function insetSafe(element, userName){
    element.innerHTML = userName + " rafi";
}

let e1 = document.querySelector('.safeInsert');
let userNameInput = document.querySelector('input[type="text"]');
let userNameValue = userNameInput.value; // Get the input value

// Update content when input changes
userNameInput.addEventListener('input', function() {
    insetSafe(e1, this.value);
});

// Initial call with current value
insetSafe(e1, userNameValue);
