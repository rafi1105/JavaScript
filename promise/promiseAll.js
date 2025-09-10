const getData = new Promise ((solve,reject)=>{
    const num= Math.ceil(Math.random()*10)
    console.log(num)
    num>5? solve({num:num}): reject({err: "data not found"})
})

const getData2 = new Promise ((solve,reject)=>{
    const num= Math.ceil(Math.random()*10)
    console.log(num)
    num>5? solve({num2:num}): reject({err: "data not found2"})
})


Promise.all([getData,getData2])
    .then(solve=>console.log(solve))
    .catch(err=>console.log(err))