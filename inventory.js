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