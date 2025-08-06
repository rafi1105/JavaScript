//  style
document.querySelector("p").style.color= "red"
// check box manuculation
let checkBox= document.querySelectorAll('input[type="checkbox"]')
checkBox.forEach(element => {
    element.checked=false;
});

// input value
// Update content when input changes
let userNameInput = document.querySelector('#userText');

let userNameValue = userNameInput.value; // Get the 
userNameInput.addEventListener('input', function() {
    insetSafe(e1, this.value);
});

// Initial call with current value
let e1 = document.querySelector('.safeInsert');
function insetSafe(element, userName){
    element.innerHTML = userName + " rafi kabir";
}
insetSafe(e1, userNameValue);
// make dark mode
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

// attribute selector
let attribute=document.querySelector(".attri");
attribute.setAttribute('href','https://www.youtube.com/')
console.log("Get attribute : ",attribute.getAttribute('href'))
console.log("Remove attribute: ", attribute.removeAttribute('href')) // undefined
console.log(attribute.getAttribute('href')) // null 
// try somethings

 let show =document.querySelector('.text1').innerHTML += ` <br>
  <input type="text" name="inputField" placeholder="show" id="text2"  >
  <p> show me ! </p>
 `
let text_select = document.querySelector('#text2')
let paragraph = document.querySelector('.text1>p')
text_select.setAttribute("value", paragraph.textContent)
document.querySelector("body").innerHTML+=`<hr>`

// loop use
let lis= document.querySelectorAll(".listLoop>li")
lis.forEach(element => { // for(let i = 0;i<lis.length;i++)
   console.log(element.textContent)  // clg(lis[i].textContent)
});
// Dynamic DOM
// create a element
var dy=document.createElement("h1")
dy.textContent=("Dynamic Dom")
dy.style.color="yellow"
document.querySelector("body").append(dy) // last child add
// .prepend() is add first 


// css class 
dy.classList.add("dynamic")
dy.classList.remove("dynamic")
dy.classList.toggle("dynamic") // if exits then remove if not exits then add



