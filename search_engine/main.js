// call the functions
window.onload = function(){ 

    const form = document.querySelector("form"),
eInput = document.querySelector("input"),
eSubmit = document.querySelector("button"),
error = document.querySelector(".error");

//submit

    // your code 

form.onsubmit = (e)=>{
    e.preventDefault(); //prevents form from default state
    if(eInput.value == ""){
        eInput.classList.add("active");
        error.classList.add("active");
    } else {
        check();
    }
    eInput.onKeyup = ()=> {
        check();
    }
    function check() {
        if(eInput.value == ""){
            eInput.classList.add("active");
            error.classList.add("active");
        } else {
            eInput.classList.remove("active");
            error.classList.remove("active");
        }

    }
    //submit form if query is filled
    if(!eInput.classList.contains("active")) {
        form.submit();
        console.log("form submitted");
    // timeout to clear console
        setTimeout(() =>{
            console.clear("form submitted")
        }, 4500)
    }

}
};
