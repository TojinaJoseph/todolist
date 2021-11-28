
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState==4&&this.status==200){
         var response = JSON.parse(this.responseText);
         var output="";
         for (var i=0;i<response.length;i++){ 
             output +='<li id="liitem" class="lis">'+'<input type="checkbox" id="newli" name="box" onclick="check()">'+ response[i].title+'<i class="fas fa-trash" id="delete" name="del" onclick="this.parentNode.remove()"></i>' +'</li>';    
         }
         document.getElementById("items").innerHTML =output;   
    }
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();

//message
function check(){ 
     var b=document.getElementsByName("box");
      for (let i=0;i<b.length;i++){
        if(b[i].checked){
         tasksno();
         return true;  
         }   
     }
 }

function tasksno(){
    var checkedtasks=document.querySelectorAll('input[type="checkbox"]:checked').length;
    console.log(checkedtasks);
    if (checkedtasks==5) {
       alert("congratulations you have completed five tasks");
       return true;
    }else{
        return false;
    }
}
//message
//reloading function
function reloading(){
    location.reload();
}
//reloading function
// display date
var date = document.getElementById("date");
const options = {
weekday:'long',
month:'long',
day:'numeric'
}
const today=new Date();
date.innerHTML=today.toDateString("en-us",options);
// display date