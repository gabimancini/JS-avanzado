/* let promise = new Promise((resolve, reject) => {
    let number = Math.floor(Math.random()*10);
    setTimeout(()=>{
        if(number > 5){
            resolve(number);
        }else{
            reject(new Error("Es menor a 5"));
        }
    }, 1000);
});
promise
    .then((valor)=>{
        console.log(valor)
    })
    .catch((error)=>{
        console.error(error);
    }) */

let promise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest;
    xhr.open("GET", "texto.txt");
    xhr.addEventListener("load", () => {
        if (xhr.status == 200) {
            resolve(xhr.response);
        } else {
            reject(new Error("El archivo no se encuentra."))
        }
    })
    xhr.send();
})
promise
    .then((valor) => {
        console.log(valor)
    })
    .catch((error) => {
        console.error(error)
    })