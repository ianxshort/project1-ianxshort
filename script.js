
async function extractData(){
    try{
        
        let dataResponse= await fetch("./data.json");
        let destData=await dataResponse.json();
        destData.forEach(destination=>{
            const cardData=document.getElementById(destination.id)

            cardData.innerHTML=
            `
                <img src="${destination.image}" alt="${destination.name}"/>
                <h2>${destination.name}<h2>
                <p>${destination.description}<p>

            `;



        });





    }

    catch(error){
        console.error("Error fetching data:", error);



    }





}
extractData();
    
    
    
  


























