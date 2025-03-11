
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

                let cardElement=action.target.closest('card');
                if(!cardElement)return; //if the user doesn't click anything just don't enact the function
                let cardID= parseInt(cardElement.id); //set a variable equal to whatever the person clicked 
            let correctID=destData.find(destination=>destination.id===cardID); //this line will allow us to gain access to the specific object because of the find function
        

            sessionStorage.setItem("locationData",JSON.stringify(correctID));
            
            window.location.href=`destination.html`;
            
        });
    }
    catch(error){
        console.error("error fetching data", error);
    }
    
    
}

function fillPage()
{
   
        let destinationData=JSON.parse(sessionStorage.getItem("locationData"));
        let cardData=document.getElementById(destinationData.id);
        cardData.style.backgroundImage=`url("${destinationData.image}")`;

        cardData.innerHTML+=
        `
        <h2>${destinationData.name}</h2>
        <p>${destinationData.long_description}</p>
        `;

        let counter=1;
        destinationData.itinerary.forEach(day=>
        {
            cardData.innerHTML+=
            `
            <p>Day ${counter} ${day}</p>
            
            `;
            counter++;
        });

    cardData.innerHTML+=
    `

    <p>Latitude: ${destinationData.details.location.latitude}</p>
    <p>Longitude: ${destinationData.details.location.longitude}</p>


    `;
    
}






let destinationData=JSON.parse(sessionStorage.getItem("locationData"));
let cardData=document.getElementById(destinationData.id);
cardData.style.backgroundImage=`url("${destinationData.image}")`;

    cardData.innerHTML+=
    `
    <h2>${destinationData.name}</h2>
    <p>${destinationData.long_description}</p>


    `
    let counter=1;
    destinationData.itinerary.forEach(day=>{
        cardData.innerHTML+=
        `
        <p>Day ${counter} ${day}</p>
        
        `;
        counter++;
    });

    cardData.innerHTML+=
    `

    <p>Latitude: ${destinationData.details.location.latitude}</p>
    <p>Longitude: ${destinationData.details.location.longitude}</p>


    `;






// let cardID=action.target
//const cardData=document.getElementById(action.target );
//  cardData.style.backgroundImage = `url("${destination.image}")`;
/*cardData.innerHTML=
`
    <h2>${destination.name}</h2>
    <p>${destination.description}</p>

`;
*/



    
    
    
  


























