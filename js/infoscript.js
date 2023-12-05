let contact = document.getElementById("contact");
let opening = document.getElementById("opening");
let tickets = document.getElementById("tickets");
let facilities = document.getElementById("facilities")
                
document.getElementById("contactList").addEventListener("click", function () {
                             
    if 
    (contact.style.display === "none" || contact.style.display === "" ){
    contact.style.display = "block";
    opening.style.display ="none";
    tickets.style.display ="none";
    facilities.style.display ="none";}
});

document.getElementById("openingList").addEventListener("click", function () {

    if 
    (opening.style.display === "none" || opening.style.display === "" ){
    contact.style.display = "none";
    opening.style.display ="block";
    tickets.style.display ="none";
    facilities.style.display ="none";}
});

document.getElementById("ticketsList").addEventListener("click", function () {

    if 
    (tickets.style.display === "none" || tickets.style.display === "" ){
    contact.style.display = "none";
    opening.style.display ="none";
    tickets.style.display ="block";
    facilities.style.display ="none";}
});

document.getElementById("facilitiesList").addEventListener("click", function () {

    if 
    (facilities.style.display === "none" || facilities.style.display === "" ){
    contact.style.display = "none";
    opening.style.display ="none";
    tickets.style.display ="none";
    facilities.style.display ="block";}
});