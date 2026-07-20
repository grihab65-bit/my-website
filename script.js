// Dark Mode

const themeBtn = document.getElementById("theme-btn");

themeBtn.onclick = function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML = "☀️";
    }
    else{
        themeBtn.innerHTML = "🌙";
    }

};




// Reviews

function addReview(){

let name = document.getElementById("name").value;
let rating = document.getElementById("rating").value;
let message = document.getElementById("message").value;


if(name === "" || message === ""){
    alert("Please fill all fields");
    return;
}


let review = document.createElement("div");

review.className = "testimonial";


review.innerHTML = `

<p>"${message}"</p>

<h3>- ${name}</h3>

<p>${rating}</p>

`;


document.getElementById("reviews").appendChild(review);



document.getElementById("name").value="";
document.getElementById("message").value="";

}






// EmailJS

(function(){

emailjs.init("x5I9yz_NNiqWqMTS4");

})();



function sendEmail(){


let params = {


from_name:
document.getElementById("email-name").value,


from_email:
document.getElementById("email-address").value,


message:
document.getElementById("email-message").value


};



emailjs.send(

"service_7k209jg",

"template_0qwlb8q",

params

)



.then(function(){


document.getElementById("success-message").style.display="block";



document.getElementById("email-name").value="";

document.getElementById("email-address").value="";

document.getElementById("email-message").value="";



setTimeout(function(){

document.getElementById("success-message").style.display="none";

},4000);



})



.catch(function(error){

console.log(error);

alert("Error sending message");

});


}