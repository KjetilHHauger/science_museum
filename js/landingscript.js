let rocket = document.getElementById("infoRocket");
let moon = document.getElementById("infoMoon");
let start = document.getElementById("infoStart");
                
document.getElementById("landingSpaceship").addEventListener("click", function () {
                             
    if 
    (rocket.style.display === "none" || rocket.style.display === "" ){
    rocket.style.display = "block";
    moon.style.display ="none";
    start.style.display ="none";}
});

document.getElementById("landingMoon").addEventListener("click", function () {

    if 
    (moon.style.display === "none" || moon.style.display === "" ){
    rocket.style.display = "none";
    moon.style.display ="block";
    start.style.display ="none";}
});
