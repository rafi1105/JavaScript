function getvalue(val){
    // short hand for return with if 
    return (val < 25) ? "d" : (val < 50) ? "c" : "a";
}

console.log(getvalue(34))