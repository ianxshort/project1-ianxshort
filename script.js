
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


    
}











// let cardID=action.target
//const cardData=document.getElementById(action.target );
//  cardData.style.backgroundImage = `url("${destination.image}")`;
/*cardData.innerHTML=
`
    <h2>${destination.name}</h2>
    <p>${destination.description}</p>

`;
*/



    
    
    
  


























