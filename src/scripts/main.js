import getOutOfTheWay from "./hello"
import sayGoodbye from "./goodbye"
import SandwichMaker from "./sandwichMaker"
import createCar from "./createCar"
import garage from "./garageFactory"
import ContactList from "./ContactList"
import ContactForm from "./ContactForm"

getOutOfTheWay()
sayGoodbye()

SandwichMaker.placeOrder("rye", "capicola", "provolone")
SandwichMaker.getOrder();




// Create two cars using the function you imported
const mustang = createCar("Ford", "Mustang")
const accord = createCar("Honda", "Accord")
const jeep = createCar("Jeep", "Wrangler")

// Drive the cars for a while
mustang.drive("the grocery store")
accord.drive("Indianapolis")
jeep.drive(":over some rocks")

// Park the cars in the garage
garage .setInventory(mustang)    /* access to */
garage .setInventory(accord)
garage .setInventory(jeep)

// garage.push(accord)
// garage.push(jeep)

console.log(garage .getOneCar);
console.log("garage ", garage .getInventory());

ContactList() /* call fucntion for import */

