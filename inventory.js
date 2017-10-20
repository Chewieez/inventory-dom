const HomeInventory = JSON.parse(localStorage.getItem("homeInventory"));
const inventoryEl = document.getElementsByClassName("inventory")[0];

console.log("HomeInventory:", HomeInventory);
//console.log(HomeInventory.electronics)


//loop through object HomeInventory and look for objects

for (var key in HomeInventory) {
    //loop through each object inside of the object HomeInventory
    let categoryArray = HomeInventory[key];
    
     

    // loop through Array of objects
    for (var i = 0; i < categoryArray.length; i++) {
        var item = categoryArray[i];

    // hardcoded the __name to avoid another for in loop to access property names
    // Check other branch titled "tryingAnotherNestedForInLoop" on github to see 
    // my other method for accessing property names. In that branch I used another 
    // loop and assigned property names to variables and placed variables in my 
    // template string. For this application that extra step doesn't seem needed 
    // since we know the info we want from object and what class name we want to
    // match it with. 

        inventoryEl.innerHTML += `
        <section class="${item.type}">
            <h2 class="${item.type}__name">
            ${item.name}
            </h2>
            <div class="${item.type}__location">
            Location: ${item.location}
            </div>
            <div class="${item.type}__description">
            ${item.description}
            </div>
        </section>
        `

    }
 


}