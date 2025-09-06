function callbackExample(callback,user) {
    console.log("Before callback");
    callback();
    console.log("After callback");
}

callbackExample(function(user="rafi") {
    console.log("Inside callback");
    console.log("User:", user);
}, "User");