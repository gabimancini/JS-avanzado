var e = document.getElementById("miDropdown");
//addEventListener = "change"
e.addEventListener("change", ()=>{
    var strUser = e.options[e.selectedIndex].value;
    console.log(strUser);

})