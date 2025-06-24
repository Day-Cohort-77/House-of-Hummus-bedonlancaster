import { setVeg } from "./TransientState.js"

export const VeggieOptions = async () => {
    const repsonse = await fetch("http://localhost:8088/vegetables")
    const veggies = await repsonse.json()

    const veggieHTML = `
    <h2>Vegetables</h2>
    ${veggies
            .map((veg) => {
                return `<input type="radio" name="veg" value=${veg.id} id="veg--${veg.id}">${veg.type} costs $${veg.price}`


            }



            ).join(" ")}
    


    `


    return veggieHTML
}


const handleVegSelection = (changeEvent) => {
    if (changeEvent.target.name === "veg") {
        setVeg(changeEvent.target.value)
    }
}

document.addEventListener("change", handleVegSelection)