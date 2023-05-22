// const button = document.querySelector('button');

// let apiKey = "07d64dbd0bd64c8890869be5b0b92463"

// button.addEventListener("click", ()=>{
//     if(navigator.geolocation){
//         button.innerText = "Allow to detect location"
//         navigator.geolocation.getCurrentPosition(onSuccess, onError)
//     }else{
//         button.innerText = "Your Browser Not Support"
//     }
// })

// function onSuccess(position){
//     button.innerText = "Detecting Your Location"
//     let {latitude, longitude} = position.coords;
//     fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`)
//     .then(response => response.json()).then(result => {
//         let allDetail = result.results[0].components;
//         let {country, postcode, country_code, state} = allDetail;
//         button.innerHTML = `${country} ${postcode} ${country_code} ${state}`
//         console.table(allDetail);
//     }).catch(() => {
//         button.innerText = "You Denied the Request"
//     })
// }

// function onError(error){
//     if(error.code == 1){
//         button.innerText = "You Denied the Request"
//     }else if(error.code == 2){
//         button.innerText = "Location not found"
//     }else{
//         button.innerText = "Something went wrong"
//     }
//     button.setAttribute("disabled", "true")
// }



















const button = document.querySelector("button");

let apiKey = "07d64dbd0bd64c8890869be5b0b92463"

button.addEventListener("click", ()=>{
    if(navigator.geolocation){
        button.innerHTML = "Allow us to locate"
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }else{
        button.innerHTML = "Browser not support"
    }
})


const onSuccess =(position) =>{
    button.innerHTML = "Detecting your location"
    let {latitude, longitude} = position.coords
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`)
    .then(response => response.json()).then(result=>{
        let allDetail = result.results[0].components;
        let {postcode, country} = allDetail;
        button.innerText = ` ${postcode}, ${country}`
    }).catch(()=>{
        button.innerHTML = "You denied the request"
    })
}

const onError = (error) =>{
    if(error.code == 1){
        button.innerText = "You denied the request"
    }else if(error.code == 2){
        button.innerText = "Location not found"
    }else{
        button.innerText = "Something went wrong"
    }
}