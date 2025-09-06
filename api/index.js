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
    console.log(post)
}
