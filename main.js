
//Get modal element
var modal = document.getElementById('simpleModal');

//Get open modal button
var modalBtn = document.getElementById('modalBtn');

//Get close modal button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//Listen for open click
modalBtn.addEventListener('click', openModal);

 //Listen for close click
closeBtn.addEventListener('click', closeModal);

//Function to open modal
function openModal(){
   modal.style.display = 'block';
}

//Function to close modal
function closeModal(){
    modal.style.display = 'none';
}

//Listen for outside click
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Function to close modal if outside click
function outsideClick(e){
    if(e.target == modal){
        modal.style.display = 'none';
    }
}
//assigning variables to the form and input fields
const form = document.getElementById('messageForm').value;
const name = document.getElementById('formName').value;
const email = document.getElementById('formEmail').value;
const phone = document.getElementById('formPhone').value;
const message = document.getElementById('formArea').value;
const button = document.getElementById('submitBtn');

//adding event listener to the form
form.addEventListener('submit', (e) => {
  let messages = [] ;
  if(name.value === '' || formName.value == null){
    messages.push('Name is required'); 
  }

   if(email.value === '' || formEmail.value == null){
    messages.push('Email is required');
   }
    if (phone.length > 10) {
                phone = formPhone.slice(0, 10);
            }

            if (phone.length > 0) {
                if (formPhone.length <= 3) {
                    this.phone = phone;
                } else if (phone.length <= 6) {
                    formPhone.value = `(${formPhone.slice(0, 3)}) ${formPhone.slice(3)}`;
                } else {
                    this.formPhone = `(${formPhone.slice(0, 3)}) ${formPhone.slice(3, 6)}-${formPhone.slice(6)}`;
                }
            }

   if(message.value === '' || formArea.value == null){
    messages.push('Message is required');
  }
    e.preventDefault();
});

 //adding event listener to the submit button
submitBtn.addEventListener('click', (e) => {
  let messages = [] ;
});

// Confirm before resetting form
        submitBtn.addEventListener('click', function(e) {
            if (messageForm.querySelector('input:valid').value || messageForm.querySelector('textarea').value) {
                if (!confirm('Are you sure you want to clear all fields?')) {
                    e.preventDefault();
                }
            }
        });
//send email using smtpjs
function sendEmail(){
Email.send({
    Host : "ojongchristangel@gmail.com",
    To : 'ojongchristangel@gmail.com',
    password : "O1J2O3N4G5",
    From : document.getElementById('formEmail').value,
    Subject : "Contact Form Enquiry",
    Body : "Name: " + document.getElementById('formName').value + "<br>" +
           "Email: " + document.getElementById('formEmail').value + "<br>" +
            "Phone no: " + document.getElementById('formPhone').value + "<br>" +
           "Message: " + document.getElementById('formArea').value
}) 
.then(
  message => alert("Email sent successfully: " + message)
);
}