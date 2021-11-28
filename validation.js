let uname=document.getElementById("exampleInputEmail1");
let passwrd=document.getElementById("exampleInputPassword1");
function checkingfor(){
    console.log("hi"+uname.value+"not");
}
    //  if(uname.value!="admin"){
    //     uname.style.border="2px solid green";
        
    //    return false;
    
    // else if(passwrd.value!="12345"){
    //     passwrd.style.border="2px solid green";
    //     return false;
    // }
//     else{
//         return true;
//     }
// }



// validation

function validate(){
    let uname=document.getElementById("exampleInputEmail1");
    let passwrd=document.getElementById("exampleInputPassword1");
    if (uname.value=="" && passwrd.value=="") {
        uname.style.border="2px solid red";
        passwrd.style.border="2px solid red";
        return false;   
    }
    // checkingfor();
     else if(uname.value!="admin") {
        uname.style.border="2px solid red";
        return false;
    }else if(passwrd.value!="12345") {
        passwrd.style.border="2px solid red";

        return false;
    }
    else{
        uname.style.border="";
        passwrd.style.border="";
        checkingfor();
        return true;  
    }    
}
// validation
function unameval(){
    console.log("hi");
    let uname=document.getElementById("exampleInputEmail1");
    if (uname.value!="admin") {
        uname.style.border="2px solid red";
        // console.log("error");
        return false;
    } else{
        uname.style.border="";
        return true;
    }
}
function passwrdval() {
    let passwrd=document.getElementById("exampleInputPassword1");
    if(passwrd.value!="12345"){
        passwrd.style.border="2px solid red";
        return false; 
    }else{
        passwrd.style.border="";
        return true;
    }
}