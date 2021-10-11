const username = document.querySelector('#username');
const feedBackArea = document.querySelector('invalid_feedback')

username.addEventListener('keyup',(e) => {
  console.log('777777',777777);
  const usernameVal=e.target.value;

  username.classList.remove("is-invalid");
  feedBackArea.style.display = "none";

  if (usernameVal.length > 0) {
    fetch("/user/validate-username", {
      body: JSON.stringify({username: usernameVal }),
      method:"POST",
    })
      .then((res) => res.json())
      .then((data) =>{
        console.log("data", data);
        if (data.username_error){
          username.classList.add("is-invalid");
          //get error from data and display in in feedBackArea
          feedBackArea.style.display ="block";
          feedBackArea.innerHTML=`<p>${data.usernamse_error}</p>`;
        }
      });
  }
});