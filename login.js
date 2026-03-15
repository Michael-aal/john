// Login
// fetch("http://localhost:5000/api/auth/login", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ email, password })
// });


function Login(){
  const email = document.querySelector(".email").value
  const password = document.querySelector(".password").value
 console.log(email)
 console.log(password)
  if ( email == "Qrypti@gmail.com" && password == "1234"){
      location.href = "main.html";

      alert("correct!!")
  }
  else{
   alert("Wrong password")
  }
}
