
const form = document.querySelector("#userinfo");

async function sendEmail() {

    const formData = new FormData(form);
    
    // Store formData in db and send emails usnig Nodejs but let keep this project simple. I am not making a backend
    console.log(formData)
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendEmail();
});