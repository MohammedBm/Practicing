let button1 = document.querySelector("button");
// let isPurple = false;
//

// button1.addEventListener("click", function() {
//     if (isPurple) {
//         document.body.style.background = "white";
//     }
//     else {
//         document.body.style.background = "purple";
//     }
//     isPurple=!isPurple;
// });


button1.addEventListener("click", function() {
    document.body.classList.toggle("purple")
});
