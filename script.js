console.log("hi");
// form.addEventListener('submit', )
document.addEventListener("submit",async function(){
    event.preventDefault();
    let firstName = document.querySelector(".firsrName").value;
    let lastName = document.querySelector(".lastName").value;
    let numer = document.querySelector(".phoneNum").value;
    let email = document.querySelector(".userEmail").value;
    let country = document.querySelector(".userContry").value;
    let role = document.querySelector(".urole").value;
    let password =document.querySelector(".pass").value ;
    let repassword = document.querySelector(".rePass").value;
    console.log(repassword);
    
    const validate = (email) => {
        return String(email).toLowerCase()
          .match(
            // /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            /[a-z0-9]+[a-z0-9\.]+[@][a-z0-9]+[.][a-z0-9]+/
          ); 
    };

    function ValidateEmail(email)
    {
        var mailformat =  /[a-z0-9]+[a-z0-9\.]+[@][a-z0-9]+[.][a-z0-9]+/
    // var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$;
    if(!(email.match(mailformat)))
    {
    // alert("You have entered an invalid email address!");    //The pop up alert for an invalid email address
    // document.form1.text1.focus();
    console.log("false");
    return false;
    }else{
        console.log("true");
        return true;
    }
}


    if(firstName == 0){
        document.querySelector(".printError").textContent = "Enter the Name";
        myFunction();
        function myFunction() {
            let element = document.querySelector(".firsrName");
            element.classList.toggle("border");
          }
    }
    else if(lastName == 0){
        document.querySelector(".printError").textContent = "Enter the lastName";
        
        myFunction();
        function myFunction() {
            let element = document.querySelector(".lastName");
            element.classList.add("border");
          }
    }
    else if(numer.length < 10){
        document.querySelector(".printError").textContent = "Enter Numer is less then 10";

        myFunction();
        function myFunction() {
            let element = document.querySelector(".phoneNum");
            element.classList.add("border");
          }
    }
    else if(ValidateEmail(email) == false){
        document.querySelector(".printError").textContent = "Email Not Valid";
        function myFunction() {
            let element = document.querySelector(".userEmail");
            element.classList.add("border");
        }
        // let v = document.querySelector("userEmail");
        // v.classList.add("border");
        console.log("");    
    }
    else if(country == 0){
        document.querySelector(".printError").textContent = "Enter the Country";

        myFunction();
        function myFunction() {
            let element = document.querySelector(".userContry");
            element.classList.add("border");
          }
    }
    else if(role == 0){
        document.querySelector(".printError").textContent = "Enter the  Role";

        myFunction();
        function myFunction() {
            let element = document.querySelector(".urole");
            element.classList.add("border");
          }
    }
    else if(password == 0){
        document.querySelector(".printError").textContent = "Enter the Password";

        myFunction();
        function myFunction() {
            let element = document.querySelector(".pass");
            element.classList.add("border");
          }
    }
    else if(repassword == 0){
        document.querySelector(".printError").textContent = "Enter the re-Password";

        myFunction();
        function myFunction() {
            let element = document.querySelector(".rePass");
            element.classList.add("border");
          }
    }
    else if(password != repassword){
        document.querySelector(".printError").textContent = "Password not same";
        console.log("Password");
    }
    else{
        alert("Submited");
        document.querySelector(".submitMess").textContent = "Submited";
    }
    
})
