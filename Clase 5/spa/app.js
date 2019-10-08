let links = document.querySelectorAll('a');
let main = document.querySelector("main");
links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault() 
        location.hash = link.id;
       
    })
})
function ajax(url, metodo) {
    let http_metodo = metodo || "GET";
    let req = new XMLHttpRequest();
    req.open(http_metodo, url);
    req.send()
    return req;
}
window.addEventListener("hashchange", ()=>{
    var archivo = location.hash.split("#")[1] + ".html";
    let req = ajax(archivo); 
    req.addEventListener("load", () => {
        if (req.status == 200) {
            main.innerHTML = req.response;
        }
    })
})