import { FoodTruck } from "./FoodTruck.js"
import { VeggieOptions } from "./Vegetables.js"
import { EntreeOptions } from "./Entrees.js"
import { SideOptions } from "./SideDishes.js"
import { Sales } from "./Sales.js"
import { PurchaseButton } from "./PurchaseButton.js"


const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    const FoodTruckHTML = FoodTruck()
    const veggieHTML = await VeggieOptions()
    const entreeHTML = await EntreeOptions()
    const sideHTML = await SideOptions()
    const salesHTML = await Sales()
    const purchaseButtonHTML = await PurchaseButton()

    const allHTML = `
        ${FoodTruckHTML}
        ${entreeHTML}
        ${veggieHTML}
        ${sideHTML}
        
        
        ${purchaseButtonHTML}
        
        

           <article class="customerOrders">
            <h2>Previous Sales</h2>
            ${salesHTML}
        </article>
        



        `






    mainContainer.innerHTML = allHTML
}

document.addEventListener("newOrderCreated", renderAllHTML)

renderAllHTML()

