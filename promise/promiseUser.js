const post =fetch('https://jsonplaceholder.typicode.com/posts')
const comment= fetch('https://jsonplaceholder.typicode.com/comments')
const user = fetch('https://jsonplaceholder.typicode.com/users')

Promise.all([user,post,comment])
    .then(Responses=>{
        return Promise.all(Responses.map(res=>res.json()))
    })
    .then(data=>{
        const [users,posts,comments]=data
        console.log("users: ", users[0]);
        console.log("Posts: ", posts[0])
        console.log("Comments: ", comments[0])
    })
    .catch(err=>{
    console.error("error fatching" ,err);
    })