
async function extractData(){
    try{
        
        let dataResponse= await fetch("./data.json");
        let destData=await dataResponse.json();
        destData.forEach(destination=>{
            const cardData=document.getElementById(destination.id)
            cardData.style.backgroundImage = `url("${destination.image}")`;
            cardData.innerHTML=
            `
                <h2>${destination.name}</h2>
                <p>${destination.description}</p>

            `;



        });





    }

    catch(error){
        console.error("Error fetching data:", error);



    }





}
extractData();

async function openPage(){
    try{
        let dataResponse= await fetch("./data.json");
        let destData= await dataResponse.json();
        let fillData="";
        document.getElementById('destination').addEventListener("click",function(action)
        {

                let cardElement=action.target.closest('.card');  //returns the closest element that is clicked to 
                if(!cardElement)return; //if the user doesn't click anything just don't enact the function
                let cardID= parseInt(cardElement.id); //set a variable equal to whatever the person clicked 
            let correctID=destData.find(destination=>destination.id===cardID); //this line will allow us to gain access to the specific object because of the find function
        

            sessionStorage.setItem("locationData",JSON.stringify(correctID)); //saving locationDat as the stringified destination data (clicked on by the user)
            setTimeout(()=>{
                window.location.href= "destination.html"; //now we will open up a new tab 
            },100);

            
        });
    }
    catch(error){
        console.error("error fetching data", error);
    }
    
    
}
openPage(); //this executes after the reponse 

function fillPage()
{
        let destinationData=JSON.parse(sessionStorage.getItem("locationData"));
        let cardData=document.getElementById("destination-info");
        cardData.style.backgroundImage=`url("${destinationData.image}")`;

        let htmlContent=
        `
        <h2>${destinationData.name}</h2>
        <p>${destinationData.details.long_description}</p>
        `;

       
        destinationData.details.itinerary.forEach(day=>
        {
            htmlContent+=
            `
            <p>${day}</p>
            
            
            `;
            
        });

    htmlContent+=
    `

    <p>Latitude: ${destinationData.details.location.latitude}</p>
    <p>Longitude: ${destinationData.details.location.longitude}</p>


    `;
    cardData.innerHTML=htmlContent;


    let map = L.map("map").setView(
        [destinationData.details.location.latitude, destinationData.details.location.longitude], 10
    );

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    L.marker([destinationData.details.location.latitude, destinationData.details.location.longitude])
        .addTo(map)
        .bindPopup(`<b>${destinationData.name}</b>`)
        .openPopup();

}
document.querySelector('.booking button[type="submit"]').addEventListener('click',function(action){
action.preventDefault();

const destination = document.getElementById("dest").value;
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const travelers = document.getElementById("travelers").value;
const travelDate = document.getElementById("date").value;


    const currentDate=new Date().toISOString().split('T')[0]; //getting the date splitting it into a string with the correct format and splitting the timestamp 
    if(!destination || !name ||!email || !travelers || !travelDate)
    {
        alert("Please fill out the entire form");//if they missed filling out something send the message 
        return;
    }

    if(travelDate<currentDate)
    {
        alert("Cannot choose a date earlier then today");
    }

    if(travelers<1)
    {
        alert("The amount of travelers has to at least be 1 ");
    }
    console.log("Details");
    console.log("Destination:", destination);
    console.log("Name:", name);
    console.log("Email: ", email);
    console.log("Travlers: ", travelers);
    console.log("Date of Travel: ", travelDate);

    alert('Tour Booked!');
    document.getElementById('dest').value='';
    document.getElementById('name').value='';
    document.getElementById('email').value='';
    document.getElementById('travelers').value=1;
    document.getElementById('date').value='';

























})











// let cardID=action.target
//const cardData=document.getElementById(action.target );
//  cardData.style.backgroundImage = `url("${destination.image}")`;
/*cardData.innerHTML=
`
    <h2>${destination.name}</h2>
    <p>${destination.description}</p>

`;
*/



    
    
    
  


























