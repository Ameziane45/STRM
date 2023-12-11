
// Menu Toggle & Sidebar Toggle
let btn = document.querySelector(".fa-grip-lines");
let sidebar = document.querySelector(".sidebar");

// Event - Menu Toggle 
btn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

// Arrow [curent-down]
let arrows = document.querySelectorAll(".arrow");
for(var i = 0; i < arrows.length; i++){
    arrows[i].addEventListener("click", (e) =>{
        let arrowParent = e.target.parentElement.parentElement;

        arrowParent.classList.toggle("show");
    });
}