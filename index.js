const URL="http://localhost:5000/Teachers";
    let options={
        "method":"POST",
        "headers":{
            "Content-Type":"application/json"
        },
        "body":JSON.stringify({
            "id":"5",
            "name":"sneha",
            "sub":"hindi"
        })
    }
    fetch(URL,options)
    .then(response=>{
        if(response.ok){
            console.log("Inserted:",response.status,response.statusText)
        }
    })