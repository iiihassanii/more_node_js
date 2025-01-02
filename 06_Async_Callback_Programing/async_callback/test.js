const axios = require('axios').default;

const getApi = (api)=>{
    let data = axios.get(api);

    data.then((res)=>{
        console.log(JSON.stringify(res.data,["userId"], 4));
    }).catch((err)=>{
        console.error(err.toString());
    })
}

getApi('https://jsonplaceholder.typicode.com/todoss')