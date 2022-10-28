window.onload = init;
//call addLastUpdate function on load
function init(){ 
    addLastUpdate();
  }

function addLastUpdate(){
  //create date object w/ LastModified function called as a parameter
  const d = new Date(document.lastModified);
  
 //access HTML at the ID and apply the lastmodied date obect in the specified string format
  document.getElementById("modified").innerHTML = "Last modified:" + d.toDateString();
}

document.getElementById("myBtn").addEventListener("click", displayFormValues);
function displayFormValues(){
  let nameV = document.getElementById("fLname").value;
  let emailV = document.getElementById('email').value;
  let genreV = document.getElementById('gselection').value;
  let commentV = document.getElementById('comment').value;
  
  document.getElementById("name1").innerHTML = nameV;
  document.getElementById("email1").innerHTML = emailV;
  document.getElementById("genrV").innerHTML = genreV;
  document.getElementById("comm").innerHTML = commentV;
}