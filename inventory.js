const HomeInventory = JSON.parse(localStorage.getItem("homeInventory"));
const inventoryEl = document.getElementsByClassName("inventory")[0];
let propName;
let propLocation;
let propType;
let propDescription;


console.log("HomeInventory:", HomeInventory);
//console.log(HomeInventory.electronics)


//loop through object HomeInventory and look for objects

for (var key in HomeInventory) {
    //loop through each object inside of the object HomeInventory
    let categoryArray = HomeInventory[key];
    
     

    // loop through Array of objects
    for (var i = 0; i < categoryArray.length; i++) {
        var item = categoryArray[i];

        // loop through each object in the array and populate a variable for each key property name
        for (prop in item) {
            switch (true) {
                case (prop === "name"):
                    propName = prop;
                    break;
                case (prop === "location"):
                    propLocation = prop;
                    break;
                case (prop === "type"):
                    propType = prop;
                    break;
                case (prop === "description"):
                    propDescription = prop;
                    break;
            }
        }

    // Sets innerHTML of page with data from each object in database. 
    // Uses variables that were populated by the for in loop over the object "Item" to set the back half of each class name; name, location, description, type.
        inventoryEl.innerHTML += `
        <section class="${item.type}">
            <h2 class="${item.type}__${propName}">
            ${item.name}
            </h2>
            <div class="${item.type}__${propLocation}">
            ${propLocation}: ${item.location}
            </div>
            <div class="${item.type}__${propDescription}">
            ${propDescription}: ${item.description}
            </div>
        </section>
        `

    }
 


}