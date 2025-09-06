// add eventlistener 
const clickSelector = document.querySelector('.click')
        // what the event do.
    function clickDo (){
        clickSelector.style.color='green';
    }
    function dbClick(){
        clickSelector.style.color='black'
    }
clickSelector.addEventListener('click',clickDo)
clickSelector.addEventListener('dblclick',dbClick) // or
clickSelector.removeEventListener('dblclick',dbClick) // remove 


// 
