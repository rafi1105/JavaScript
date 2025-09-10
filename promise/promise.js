const getData = new Promise ((solve,reject)=>{
    const num= Math.ceil(Math.random()*10)
    console.log(num)
    num>5? solve({num:num}): reject({err: "data not found"})
})


getData
            .then(data=> console.log(data))
            .catch(err=> console.log(err))

