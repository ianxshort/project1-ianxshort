
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
    let dataResponse= await fetch("./data.json");
    let destData= await dataResponse.json();
    let fillData="";
    document.getElementById('destination').addEventListener("click",function(action){
        if(action.target.classList.contains('card'))
            window.location.href=`destination.html`;
        let cardID= parseInt(action.target.id); //set a variable equal to whatever the person clicked 
        let correctID=destData.find(destination=>destination.id===cardID); //this line will allow us to gain access to the specific object because of the find function
      

        sessionStorage.setItem("locationData",JSON.stringify(correctID));
          
        window.location.href=`destination.html`;



    


    });
}

let destinationData=JSON.parse(sessionStorage.getItem("locationData"));
let cardData=document.getElementById(destinationData.id);
cardData.style.backgroundImage=`url("${destinationData.image}")`;

    cardData.innerHTML+=
    `
    <h2>${destinationData.name}</h2>
    <p>${destinationData.long_description}</p>


    `
    destinationData.itinerary.forEach(day=>{
        cardData.innerHTML+=
        `
        <p>${day}<p>
        
        `
    });

    cardData.innerHTML+=
    `
    <p>Latitude: ${destinationData.details.location.latitude}</p>
    <p>Longitude: ${destinationData.details.location.longitude}</p>


    `




// let cardID=action.target
//const cardData=document.getElementById(action.target );
//  cardData.style.backgroundImage = `url("${destination.image}")`;
/*cardData.innerHTML=
`
    <h2>${destination.name}</h2>
    <p>${destination.description}</p>

`;
*/


async function openPage(){
    let dataResponse= await fetch("./data.json");
    let destData= await dataResponse.json();
    let fillData="";
    document.getElementById('destination').addEventListener("click",function(action){
        if(action.target.classList.contains('card'))
            window.location.href=`destination.html`;
        let cardID= parseInt(action.target.id); //set a variable equal to whatever the person clicked 
        let correctID=destData.find(destination=>destination.id===cardID); //this line will allow us to gain access to the specific object because of the find function
        //find function returns the first value that matches the condition
        const cardData=document.getElementById(cardID); //gain access to html so we can insert data under the correct div
        cardData.style.backgroundImage = `url("${correctID.image}")`; //insert the image 

        cardData.innerHTML+=`
            <h2>${correctID.name}<h2>
            <p>${correctID.details.long_description}</p>
            
          `;

            correctID.details.itinerary.forEach(day=>{
                cardData.innerHTML+=`
                <p>${day}</p>
                `
            });
            cardData.innerHTML+=`
            <p>${correctID.details.itinerary.location.latitude}</p>
            <p>${correctID.details.itinerary.location.longitude}</p>

            
          `;


          



    


    });
}

    
    
    
  


























