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

