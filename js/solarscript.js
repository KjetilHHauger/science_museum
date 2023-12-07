let sun = document.getElementById("sunText");
let mercury = document.getElementById("mercuryText");
let venus = document.getElementById("venusText");
let earth = document.getElementById("earthText")
let mars = document.getElementById("marsText")
                
document.getElementById("sun").addEventListener("click", function () {
                             
    if 
    (sunText.style.display === "none" || sunText.style.display === "" ){
    sunText.style.display = "block";
    mercuryText.style.display ="none";
    venusText.style.display ="none";
    earthText.style.display ="none";
    marsText.style.display ="none";
    solarText.style.display ="none";}
});

document.getElementById("mercury").addEventListener("click", function () {

    if 
    (mercuryText.style.display === "none" || mercuryText.style.display === "" ){
    sunText.style.display = "none";
    mercuryText.style.display ="block";
    venusText.style.display ="none";
    earthText.style.display ="none";
    marsText.style.display ="none";
    solarText.style.display ="none";}
});

document.getElementById("venus").addEventListener("click", function () {

    if 
    (venusText.style.display === "none" || venusText.style.display === "" ){
    sunText.style.display = "none";
    mercuryText.style.display ="none";
    venusText.style.display ="block";
    earthText.style.display ="none";
    marsText.style.display ="none";
    solarText.style.display ="none";}
});

document.getElementById("earth").addEventListener("click", function () {

    if 
    (earthText.style.display === "none" || earthText.style.display === "" ){
    sunText.style.display = "none";
    mercuryText.style.display ="none";
    venusText.style.display ="none";
    earthText.style.display ="block";
    marsText.style.display ="none";
    solarText.style.display ="none";}
});

document.getElementById("mars").addEventListener("click", function () {

    if 
    (marsText.style.display === "none" || marsText.style.display === "" ){
    sunText.style.display = "none";
    mercuryText.style.display ="none";
    venusText.style.display ="none";
    earthText.style.display ="none";
    marsText.style.display ="block";
    solarText.style.display ="none";}
});