
Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

gsap.from(".nv",{
    opacity:0,
    color:"red",
    duration:1,
    x:50,
    // y:-50,
    // delay:.1,
    stagger:1,
    // repeat:-1,
    // yoyo:true

})
gsap.from(".img",{
    opacity:0,
    
    duration:3,
    y:110,
    scale:1.5,
    // y:-50,
    delay:.1,
   
    // repeat:1,
    // yoyo:true

})
Shery.makeMagnet(".magnet" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.textAnimate(".text-target" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
  Shery.makeMagnet(".hd" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  gsap.from(".td1",{
    opacity:0,
    color:"red",
    duration:15,
    x:50,
   scale:0,
    delay:10,
    stagger:1,
    // repeat:-1,
    // yoyo:true

});
// gsap.to("#fst1",{
//     opacity:0,
    
//     duration:2,
//     y:110,
//     scale:1,
//     y:50,
//     delay:.1,
   
//     repeat:3,
//     yoyo:true
// });
Shery.imageEffect(".fst1", {
    style: 3 /*OR 5 for different variant */,
    // debug: true,
  });
  const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("confirm_password");
const radio = document.getElementById("male");
const radio2 = document.getElementById("female");
const check = document.getElementById("checkbox");

function checkrequired(inputs) {
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      error(input, "please fill");
    } else {
      success(input);
      alert("thanks")
    }
  });
}

function error(input, message) {
  const formGroup = input.parentElement;
  formGroup.className = "form_g error";
  const p = formGroup.querySelector("p");
  p.innerHTML = message;
}
function success(input) {
  const formGroup = input.parentElement;
  formGroup.className = "form_g success";
  const p = formGroup.querySelector("p");
  p.innerHTML = "";
}
function checkrequired_2(inputs) {
  inputs.forEach((input) => {
    if (input.checked != true) {
      error(input, "required");
    } else {
      success(input);
    }
  });
}
function password_(password,password2)
{
    if(password.value!=password2.value){
        error(password2,"does not match");
    }
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkrequired([username, email, password, password2]);
  checkrequired_2([radio, radio2, check]);
  password_(password,password2);
});
