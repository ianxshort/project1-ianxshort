
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
    document.getElementById('destination').addEventListener("click",function(action){
        if(action.target.classList.contains('card'))
            window.location.href=


    }
}
    
    
    
  


























