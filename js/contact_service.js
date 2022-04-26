// Provide persistence solution code here


const persistSubmittedContact = (info) => {
   let xhr = new XMLHttpRequest();
   xhr.open("POST", "http://localhost:3000/contact", true)
   xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8"); //sets the value of an HTTP request header
   xhr.onreadystatechange = function () {
      if (this.status == 200) {
         alert("Data added successfully");
         alert(this.responseText);
      }
   };
   xhr.send(info);
}