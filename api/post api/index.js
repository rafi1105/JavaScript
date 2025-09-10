const loadData=()=>{
    
    fetch('https://jsonplaceholder.typicode.com/todos/1') // promise for response
      .then(response => response.json()) // promise for json data
      .then(json => console.log(json)) // log the json data
      .catch(error => console.error('Error fetching data:', error));

}

const loadPost=()=>{
    const url = 'https://jsonplaceholder.typicode.com/posts';

    fetch (url)
    .then (res=>res.json())
    .then (data=> displayPost(data))
};

const displayPost=(post)=>{
    // get container
    
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = ''; // Clear previous content
    post.forEach(element => {
        console.log(element)
        const  postbox = document.createElement('div');
        postbox.className = "add"
        postbox.innerHTML = `
        <h3>User- ${element.id}</h3>
        <h4>Title: ${element.title}</h4>
        <p>Post: ${element.body}</p>
        `;
        postContainer.appendChild(postbox);
        postbox.style.border = "2px solid black";
        postbox.style.margin = "20px";
        postbox.style.padding = "20px";
    });
   }


