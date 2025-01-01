let myPromise3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('success')
    }, 3000);
})


let myPromise2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('success')
    }, 6000);
});



myPromise2.then(()=>{
    console.log(`This is First promise! done after 6 sec`)
    myPromise3.then(()=>{
        console.log(`This is second promise! done after 3 sec`)
    });
});
