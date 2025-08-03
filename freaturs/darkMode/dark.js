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